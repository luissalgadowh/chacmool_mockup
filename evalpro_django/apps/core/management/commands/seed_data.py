"""
Management command to create seed data for EvalPro
"""
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from apps.core.models import Employee


class Command(BaseCommand):
    help = 'Creates seed data for EvalPro'

    def handle(self, *args, **kwargs):
        self.stdout.write('Creating seed data...')

        # Create admin user
        if not User.objects.filter(username='maria').exists():
            user_maria = User.objects.create_user(
                username='maria',
                email='maria@empresa.com',
                password='maria123',
                first_name='María',
                last_name='García'
            )
            Employee.objects.create(
                user=user_maria,
                employee_id='EMP-001',
                first_name='María',
                last_name='García',
                second_last_name='López',
                email='maria@empresa.com',
                position='Tech Lead',
                department='Tecnología',
                is_admin=True,
                nationality='España',
                marital_status='Casada',
                gender='Femenino'
            )
            self.stdout.write(self.style.SUCCESS('✓ Admin user created: maria@empresa.com'))

        # Create regular employee
        if not User.objects.filter(username='juan').exists():
            user_juan = User.objects.create_user(
                username='juan',
                email='juan@empresa.com',
                password='juan123',
                first_name='Juan',
                last_name='Rodríguez'
            )
            Employee.objects.create(
                user=user_juan,
                employee_id='EMP-002',
                first_name='Juan',
                last_name='Rodríguez',
                second_last_name='Pérez',
                email='juan@empresa.com',
                position='Senior Developer',
                department='Desarrollo',
                is_admin=False,
                nationality='España',
                marital_status='Soltero',
                gender='Masculino'
            )
            self.stdout.write(self.style.SUCCESS('✓ Employee user created: juan@empresa.com'))

        self.stdout.write(self.style.SUCCESS('\nSeed data created successfully!'))
        self.stdout.write('\nCredentials:')
        self.stdout.write('Admin: maria@empresa.com / maria123')
        self.stdout.write('Employee: juan@empresa.com / juan123')
