from django.db import models
from django.core.validators import MinLengthValidator, MinValueValidator, RegexValidator
from django.core.exceptions import ValidationError
import re

class Job(models.Model):
    # Job Type Choices
    JOB_TYPE_CHOICES = [
        ('full-time', 'Full Time'),
        ('part-time', 'Part Time'),
        ('contract', 'Contract'),
        ('internship', 'Internship'),
        ('temporary', 'Temporary'),
        ('remote', 'Remote'),
    ]
    
    # Experience Level Choices
    EXPERIENCE_CHOICES = [
        ('entry', 'Entry Level'),
        ('junior', 'Junior'),
        ('mid', 'Mid Level'),
        ('senior', 'Senior'),
        ('lead', 'Lead'),
        ('manager', 'Manager'),
        ('director', 'Director'),
    ]
    
    title = models.CharField(
        max_length=200,
        validators=[
            MinLengthValidator(5, message="Job title must be at least 5 characters long."),
            RegexValidator(
                regex=r'^[a-zA-Z0-9\s\-\+\#\(\)\/]+$',
                message="Job title can only contain letters, numbers, spaces, and basic punctuation."
            )
        ],
        help_text="Enter a descriptive job title (5-200 characters)"
    )
    
    description = models.TextField(
        validators=[
            MinLengthValidator(50, message="Job description must be at least 50 characters long.")
        ],
        help_text="Provide a detailed job description (minimum 50 characters)"
    )
    
    company = models.CharField(
        max_length=150,
        validators=[
            MinLengthValidator(2, message="Company name must be at least 2 characters long."),
            RegexValidator(
                regex=r'^[a-zA-Z0-9\s\-\.\&\,\(\)]+$',
                message="Company name can only contain letters, numbers, spaces, and basic punctuation."
            )
        ],
        help_text="Enter the company name (2-150 characters)"
    )
    
    location = models.CharField(
        max_length=100,
        validators=[
            MinLengthValidator(2, message="Location must be at least 2 characters long."),
        ],
        help_text="Enter job location (city, state/country)"
    )
    
    job_type = models.CharField(
        max_length=20,
        choices=JOB_TYPE_CHOICES,
        default='full-time',
        help_text="Select the type of employment"
    )
    
    experience_level = models.CharField(
        max_length=20,
        choices=EXPERIENCE_CHOICES,
        default='entry',
        help_text="Required experience level for this position"
    )
    
    salary = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
        validators=[MinValueValidator(0.01, message="Salary must be greater than 0.")],
        help_text="Annual salary (optional)"
    )
    
    remote_allowed = models.BooleanField(
        default=False,
        help_text="Check if remote work is allowed"
    )
    
    is_active = models.BooleanField(
        default=True,
        help_text="Uncheck to deactivate this job posting"
    )
    
    posted_at = models.DateTimeField(
        auto_now_add=True,
        help_text="Date and time when the job was posted"
    )
    
    updated_at = models.DateTimeField(
        auto_now=True,
        help_text="Date and time when the job was last updated"
    )

    class Meta:
        ordering = ['-posted_at']
        verbose_name = 'Job Posting'
        verbose_name_plural = 'Job Postings'
        indexes = [
            models.Index(fields=['company']),
            models.Index(fields=['location']),
            models.Index(fields=['job_type']),
            models.Index(fields=['experience_level']),
            models.Index(fields=['is_active']),
        ]

    def clean(self):
        """Custom validation for the model"""
        super().clean()
        
        # Validate title doesn't contain only numbers or special characters
        if self.title and re.match(r'^[\d\s\-\+\#\(\)\/]+$', self.title):
            raise ValidationError({
                'title': 'Job title must contain at least some letters.'
            })
        
        # Validate salary range
        if self.salary and self.salary > 10000000:  # 10 million
            raise ValidationError({
                'salary': 'Salary seems unreasonably high. Please verify the amount.'
            })
    
    def save(self, *args, **kwargs):
        """Override save to call clean method"""
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} at {self.company}"
    
    @property
    def is_recent(self):
        """Check if the job was posted within the last 30 days"""
        from datetime import timedelta
        from django.utils import timezone
        return self.posted_at >= timezone.now() - timedelta(days=30)
