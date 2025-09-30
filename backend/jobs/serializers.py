from rest_framework import serializers
from django.core.exceptions import ValidationError as DjangoValidationError
from .models import Job
import re

class JobSerializer(serializers.ModelSerializer):
    # Add computed fields
    is_recent = serializers.ReadOnlyField()
    
    class Meta:
        model = Job
        fields = [
            'id', 'title', 'description', 'company', 'location', 
            'job_type', 'experience_level', 'salary', 'remote_allowed', 
            'is_active', 'posted_at', 'updated_at', 'is_recent'
        ]
        read_only_fields = ['id', 'posted_at', 'updated_at', 'is_recent']

    def validate_title(self, value):
        """Custom validation for job title"""
        if not value or len(value.strip()) < 5:
            raise serializers.ValidationError(
                "Job title must be at least 5 characters long."
            )
        
        # Check for inappropriate words (basic example)
        inappropriate_words = ['test', 'dummy', 'fake']
        if any(word in value.lower() for word in inappropriate_words):
            raise serializers.ValidationError(
                "Job title contains inappropriate words."
            )
        
        return value.strip()

    def validate_description(self, value):
        """Custom validation for job description"""
        if not value or len(value.strip()) < 50:
            raise serializers.ValidationError(
                "Job description must be at least 50 characters long."
            )
        
        # Check for minimum word count
        word_count = len(value.split())
        if word_count < 10:
            raise serializers.ValidationError(
                "Job description must contain at least 10 words."
            )
        
        return value.strip()

    def validate_company(self, value):
        """Custom validation for company name"""
        if not value or len(value.strip()) < 2:
            raise serializers.ValidationError(
                "Company name must be at least 2 characters long."
            )
        
        return value.strip()

    def validate_location(self, value):
        """Custom validation for location"""
        if not value or len(value.strip()) < 2:
            raise serializers.ValidationError(
                "Location must be at least 2 characters long."
            )
        
        return value.strip()

    def validate_salary(self, value):
        """Custom validation for salary"""
        if value is not None:
            if value <= 0:
                raise serializers.ValidationError(
                    "Salary must be greater than 0."
                )
            if value > 10000000:  # 10 million
                raise serializers.ValidationError(
                    "Salary seems unreasonably high. Please verify the amount."
                )
        
        return value

    def validate(self, data):
        """Cross-field validation"""
        # Check if remote job has appropriate location
        if data.get('remote_allowed') and data.get('job_type') != 'remote':
            if 'remote' not in data.get('location', '').lower():
                # This is just a warning, not an error
                pass
        
        # Validate experience level matches job title patterns
        title = data.get('title', '').lower()
        experience_level = data.get('experience_level')
        
        if experience_level == 'entry' and any(word in title for word in ['senior', 'lead', 'manager']):
            raise serializers.ValidationError({
                'experience_level': 'Experience level conflicts with job title requirements.'
            })
        
        if experience_level in ['senior', 'lead'] and any(word in title for word in ['intern', 'junior', 'entry']):
            raise serializers.ValidationError({
                'experience_level': 'Experience level conflicts with job title requirements.'
            })
        
        return data

    def create(self, validated_data):
        """Custom create method with additional validation"""
        try:
            return super().create(validated_data)
        except DjangoValidationError as e:
            raise serializers.ValidationError(e.message_dict)

    def update(self, instance, validated_data):
        """Custom update method with additional validation"""
        try:
            return super().update(instance, validated_data)
        except DjangoValidationError as e:
            raise serializers.ValidationError(e.message_dict)


class JobListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for job listings"""
    is_recent = serializers.ReadOnlyField()
    
    class Meta:
        model = Job
        fields = [
            'id', 'title', 'company', 'location', 'job_type', 
            'experience_level', 'salary', 'remote_allowed', 
            'posted_at', 'is_recent'
        ]
        read_only_fields = ['id', 'posted_at', 'is_recent']


class JobCreateSerializer(serializers.ModelSerializer):
    """Serializer specifically for creating jobs with stricter validation"""
    
    class Meta:
        model = Job
        fields = [
            'title', 'description', 'company', 'location', 
            'job_type', 'experience_level', 'salary', 'remote_allowed'
        ]

    def validate(self, data):
        """Enhanced validation for job creation"""
        # All the validation from JobSerializer
        validated_data = super().validate(data)
        
        # Additional creation-specific validations
        if not data.get('title') or not data.get('description') or not data.get('company'):
            raise serializers.ValidationError(
                "Title, description, and company are required fields."
            )
        
        return validated_data
