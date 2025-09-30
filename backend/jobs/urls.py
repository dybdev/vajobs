from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet

# Create router for automatic URL routing
router = DefaultRouter()
router.register(r'jobs', JobViewSet, basename='job')

# App name for namespacing
app_name = 'jobs'

urlpatterns = [
    # Include router URLs (provides: /jobs/, /jobs/{id}/, etc.)
    path('', include(router.urls)),
    
    # Additional custom endpoints can be added here if needed
    # path('custom-endpoint/', custom_view, name='custom-endpoint'),
]
