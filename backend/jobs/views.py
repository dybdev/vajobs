from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework.views import exception_handler
from django.utils import timezone
from datetime import timedelta
import logging

from .models import Job
from .serializers import JobSerializer, JobListSerializer, JobCreateSerializer

logger = logging.getLogger(__name__)


def custom_exception_handler(exc, context):
    """Custom exception handler for better error responses"""
    # Call REST framework's default exception handler first
    response = exception_handler(exc, context)
    
    if response is not None:
        custom_response_data = {
            'error': True,
            'message': 'An error occurred',
            'details': response.data,
            'status_code': response.status_code
        }
        
        # Log the error
        logger.error(f"API Error: {exc} - Context: {context}")
        
        # Customize error messages based on status code
        if response.status_code == 400:
            custom_response_data['message'] = 'Invalid input data provided'
        elif response.status_code == 401:
            custom_response_data['message'] = 'Authentication required'
        elif response.status_code == 403:
            custom_response_data['message'] = 'Permission denied'
        elif response.status_code == 404:
            custom_response_data['message'] = 'Resource not found'
        elif response.status_code == 405:
            custom_response_data['message'] = 'Method not allowed'
        elif response.status_code >= 500:
            custom_response_data['message'] = 'Internal server error'
            # Don't expose sensitive error details in production
            if not getattr(context['request'], 'DEBUG', False):
                custom_response_data['details'] = 'Please contact support if the problem persists'
        
        response.data = custom_response_data
    
    return response


class JobPagination(PageNumberPagination):
    """Custom pagination for job listings"""
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 50


class JobViewSet(viewsets.ModelViewSet):
    """
    ViewSet for managing job postings with comprehensive error handling
    
    Provides CRUD operations for job postings with:
    - Filtering by company, location, job type, and experience level
    - Search functionality across title, description, and company
    - Custom pagination
    - Proper error handling and validation
    """
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer
    pagination_class = JobPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    
    # Filtering options
    filterset_fields = ['company', 'location', 'job_type', 'experience_level', 'remote_allowed']
    
    # Search fields
    search_fields = ['title', 'description', 'company', 'location']
    
    # Ordering options
    ordering_fields = ['posted_at', 'updated_at', 'salary', 'title']
    ordering = ['-posted_at']

    def get_serializer_class(self):
        """Return appropriate serializer based on action"""
        if self.action == 'list':
            return JobListSerializer
        elif self.action == 'create':
            return JobCreateSerializer
        return JobSerializer

    def get_queryset(self):
        """Custom queryset with additional filtering options"""
        queryset = super().get_queryset()
        
        # Filter by salary range
        min_salary = self.request.query_params.get('min_salary')
        max_salary = self.request.query_params.get('max_salary')
        
        if min_salary:
            try:
                queryset = queryset.filter(salary__gte=float(min_salary))
            except (ValueError, TypeError):
                pass  # Invalid salary value, ignore filter
        
        if max_salary:
            try:
                queryset = queryset.filter(salary__lte=float(max_salary))
            except (ValueError, TypeError):
                pass  # Invalid salary value, ignore filter
        
        # Filter by recent jobs
        recent_only = self.request.query_params.get('recent_only')
        if recent_only and recent_only.lower() in ['true', '1']:
            from datetime import timedelta
            from django.utils import timezone
            thirty_days_ago = timezone.now() - timedelta(days=30)
            queryset = queryset.filter(posted_at__gte=thirty_days_ago)
        
        return queryset

    def create(self, request, *args, **kwargs):
        """Custom create method with enhanced error handling"""
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            job = serializer.save()
            
            # Return detailed response
            response_serializer = JobSerializer(job)
            return Response({
                'success': True,
                'message': 'Job posting created successfully',
                'data': response_serializer.data
            }, status=status.HTTP_201_CREATED)
            
        except DjangoValidationError as e:
            logger.error(f"Django validation error in job creation: {e}")
            return Response({
                'error': True,
                'message': 'Validation error',
                'details': e.message_dict if hasattr(e, 'message_dict') else str(e)
            }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(f"Unexpected error in job creation: {e}")
            return Response({
                'error': True,
                'message': 'Failed to create job posting',
                'details': str(e) if request.user.is_staff else 'Please contact support'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def update(self, request, *args, **kwargs):
        """Custom update method with enhanced error handling"""
        try:
            partial = kwargs.pop('partial', False)
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data, partial=partial)
            serializer.is_valid(raise_exception=True)
            job = serializer.save()
            
            return Response({
                'success': True,
                'message': 'Job posting updated successfully',
                'data': JobSerializer(job).data
            })
            
        except DjangoValidationError as e:
            logger.error(f"Django validation error in job update: {e}")
            return Response({
                'error': True,
                'message': 'Validation error',
                'details': e.message_dict if hasattr(e, 'message_dict') else str(e)
            }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(f"Unexpected error in job update: {e}")
            return Response({
                'error': True,
                'message': 'Failed to update job posting',
                'details': str(e) if request.user.is_staff else 'Please contact support'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def destroy(self, request, *args, **kwargs):
        """Custom delete method (soft delete)"""
        try:
            instance = self.get_object()
            # Soft delete by setting is_active to False
            instance.is_active = False
            instance.save()
            
            return Response({
                'success': True,
                'message': 'Job posting deactivated successfully'
            }, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Error in job deletion: {e}")
            return Response({
                'error': True,
                'message': 'Failed to deactivate job posting',
                'details': str(e) if request.user.is_staff else 'Please contact support'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=False, methods=['get'])
    def statistics(self, request):
        """Get job statistics"""
        try:
            total_jobs = self.get_queryset().count()
            recent_jobs = self.get_queryset().filter(
                posted_at__gte=timezone.now() - timedelta(days=30)
            ).count()
            
            # Get top companies and locations
            from django.db.models import Count
            top_companies = self.get_queryset().values('company').annotate(
                job_count=Count('id')
            ).order_by('-job_count')[:5]
            
            top_locations = self.get_queryset().values('location').annotate(
                job_count=Count('id')
            ).order_by('-job_count')[:5]
            
            return Response({
                'success': True,
                'data': {
                    'total_jobs': total_jobs,
                    'recent_jobs': recent_jobs,
                    'top_companies': list(top_companies),
                    'top_locations': list(top_locations)
                }
            })
            
        except Exception as e:
            logger.error(f"Error getting job statistics: {e}")
            return Response({
                'error': True,
                'message': 'Failed to get statistics'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=True, methods=['post'])
    def reactivate(self, request, pk=None):
        """Reactivate a deactivated job posting"""
        try:
            job = Job.objects.get(pk=pk)  # Get even inactive jobs
            job.is_active = True
            job.save()
            
            return Response({
                'success': True,
                'message': 'Job posting reactivated successfully',
                'data': JobSerializer(job).data
            })
            
        except Job.DoesNotExist:
            return Response({
                'error': True,
                'message': 'Job posting not found'
            }, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            logger.error(f"Error reactivating job: {e}")
            return Response({
                'error': True,
                'message': 'Failed to reactivate job posting'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
