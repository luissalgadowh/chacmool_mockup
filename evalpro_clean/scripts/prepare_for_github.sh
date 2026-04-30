#!/bin/bash

# Script para preparar el proyecto para GitHub

echo "========================================="
echo "  Preparando EvalPro para GitHub"
echo "========================================="
echo ""

cd /app/evalpro_clean

# Eliminar archivos innecesarios
rm -rf __pycache__
find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null
find . -type f -name "*.pyc" -delete
find . -type f -name "*.pyo" -delete
find . -type f -name ".DS_Store" -delete

# Crear .env si no existe
if [ ! -f ".env" ]; then
    cp .env.example .env
fi

# Renombrar README para GitHub
if [ -f "README_GITHUB.md" ]; then
    mv README_GITHUB.md README.md
fi

echo "✓ Proyecto limpio y listo para GitHub"
echo ""
echo "========================================="
echo "  Próximos pasos:"
echo "========================================="
echo ""
echo "1. En tu máquina local o GitHub:"
echo "   - Crea un nuevo repositorio: 'evalpro-django'"
echo ""
echo "2. Desde este directorio (/app/evalpro_clean):"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit: EvalPro Django + Bootstrap'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/tu-usuario/evalpro-django.git"
echo "   git push -u origin main"
echo ""
echo "3. En Emergent (nueva conversación):"
echo "   - Clic en 'Pull from GitHub'"
echo "   - Ingresa: https://github.com/tu-usuario/evalpro-django"
echo "   - Continúa desarrollando"
echo ""
