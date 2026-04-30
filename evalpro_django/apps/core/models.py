"""
Core app - Models
"""
from django.db import models
from django.contrib.auth.models import User

class Employee(models.Model):
    """Employee model - extends Django User"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='employee_profile')
    employee_id = models.CharField(max_length=20, unique=True)
    
    # Personal Info
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    second_last_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(unique=True)
    
    # Work Info
    position = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    
    # Profile Info
    primary_id_type = models.CharField(max_length=50, blank=True)
    secondary_id_type = models.CharField(max_length=50, blank=True)
    nationality = models.CharField(max_length=100, blank=True)
    marital_status = models.CharField(max_length=50, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=20, blank=True)
    share_birthday = models.BooleanField(default=True)
    
    # Address
    address = models.CharField(max_length=255, blank=True)
    postal_code = models.CharField(max_length=10, blank=True)
    colony = models.CharField(max_length=100, blank=True)
    municipality = models.CharField(max_length=100, blank=True)
    
    # Role
    is_admin = models.BooleanField(default=False)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'employees'
        ordering = ['last_name', 'first_name']
        
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def get_avatar_url(self):
        if self.avatar:
            return self.avatar.url
        return '/static/images/default-avatar.png'
