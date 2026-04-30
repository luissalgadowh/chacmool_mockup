#!/bin/bash

# Script para completar el setup del proyecto Django EvalPro

echo "========================================="
echo "  Completando Setup de EvalPro Django"
echo "========================================="
echo ""

cd /app/evalpro_django

# Hacer manage.py ejecutable
chmod +x manage.py

# Crear .env si no existe
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✓ Archivo .env creado"
fi

# Crear __init__.py en todas las apps
find apps -type d -exec touch {}/__init__.py \; 2>/dev/null

echo "✓ Archivos __init__.py creados"

# Crear archivos vacíos necesarios
touch apps/employees/admin.py apps/employees/models.py apps/employees/views.py apps/employees/urls.py apps/employees/forms.py
touch apps/evaluations/admin.py apps/evaluations/models.py apps/evaluations/views.py apps/evaluations/urls.py apps/evaluations/forms.py
touch apps/kpis/admin.py apps/kpis/models.py apps/kpis/views.py apps/kpis/urls.py apps/kpis/forms.py
touch apps/pdi/admin.py apps/pdi/models.py apps/pdi/views.py apps/pdi/urls.py apps/pdi/forms.py
touch apps/matrix/admin.py apps/matrix/models.py apps/matrix/views.py apps/matrix/urls.py apps/matrix/forms.py

echo "✓ Archivos de apps creados"

echo ""
echo "========================================="
echo "  Setup Completado"
echo "========================================="
echo ""
echo "Próximos pasos:"
echo "1. Activa el entorno virtual: source venv/bin/activate"
echo "2. Instala dependencias: pip install -r requirements.txt"
echo "3. Ejecuta migraciones: python manage.py migrate"
echo "4. Crea superusuario: python manage.py createsuperuser"
echo "5. Carga datos iniciales: python manage.py loaddata seed.json"
echo "6. Inicia el servidor: python manage.py runserver"
echo ""
