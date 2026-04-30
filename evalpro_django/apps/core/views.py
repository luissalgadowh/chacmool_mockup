"""
Core app - Views
"""
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Employee


def login_view(request):
    """Login view"""
    if request.user.is_authenticated:
        return redirect('core:dashboard')
    
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        # Authenticate by email
        try:
            user = User.objects.get(email=email)
            user = authenticate(request, username=user.username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Bienvenido, {user.first_name}!')
                return redirect('core:dashboard')
            else:
                messages.error(request, 'Credenciales inválidas')
        except User.DoesNotExist:
            messages.error(request, 'Usuario no encontrado')
    
    return render(request, 'pages/login.html')


def logout_view(request):
    """Logout view"""
    logout(request)
    messages.info(request, 'Sesión cerrada exitosamente')
    return redirect('core:login')


class DashboardView(LoginRequiredMixin, TemplateView):
    """Dashboard view"""
    template_name = 'pages/dashboard.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        
        # Get current employee profile
        try:
            context['employee'] = self.request.user.employee_profile
        except:
            context['employee'] = None
        
        # Check if admin
        context['is_admin'] = context['employee'].is_admin if context['employee'] else False
        
        # Stats for dashboard
        context['total_employees'] = Employee.objects.count()
        context['total_evaluations'] = 0  # TODO: implement when evaluations app is ready
        
        return context


class ProfileView(LoginRequiredMixin, TemplateView):
    """Employee Profile View"""
    template_name = 'pages/profile.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        employee_id = self.kwargs.get('pk', self.request.user.employee_profile.id)
        
        try:
            employee = Employee.objects.get(id=employee_id)
            context['employee'] = employee
            context['is_own_profile'] = (employee.id == self.request.user.employee_profile.id)
            context['is_admin'] = self.request.user.employee_profile.is_admin
        except Employee.DoesNotExist:
            messages.error(self.request, 'Empleado no encontrado')
            return redirect('core:dashboard')
        
        return context
