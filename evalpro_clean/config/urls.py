"""
URL Configuration for EvalPro project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('apps.core.urls')),
    path('employees/', include('apps.employees.urls')),
    path('evaluations/', include('apps.evaluations.urls')),
    path('kpis/', include('apps.kpis.urls')),
    path('pdi/', include('apps.pdi.urls')),
    path('matrix/', include('apps.matrix.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
