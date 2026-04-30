#!/bin/bash

# Script de inicio rápido para EvalPro Django

echo "========================================="
echo "  EvalPro Django - Inicio Rápido"
echo "========================================="
echo ""

cd /app/evalpro_django

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Verificar Docker
if ! command -v docker-compose &> /dev/null; then
    echo -e "${YELLOW}Docker Compose no instalado. Usa instalación local.${NC}"
    echo ""
    echo "Instalación Local:"
    echo "1. python3 -m venv venv"
    echo "2. source venv/bin/activate"
    echo "3. pip install -r requirements.txt"
    echo "4. cp .env.example .env"
    echo "5. python manage.py migrate"
    echo "6. python manage.py seed_data"
    echo "7. python manage.py runserver"
    exit 1
fi

# Crear .env si no existe
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo -e "${GREEN}✓ Archivo .env creado${NC}"
fi

# Iniciar con Docker
echo -e "${YELLOW}🐳 Iniciando servicios con Docker...${NC}"
docker-compose up --build -d

echo ""
echo -e "${YELLOW}⏳ Esperando a que la base de datos esté lista...${NC}"
sleep 10

# Ejecutar migraciones
echo -e "${YELLOW}📊 Ejecutando migraciones...${NC}"
docker-compose exec -T web python manage.py migrate

# Cargar datos de prueba
echo -e "${YELLOW}🌱 Cargando datos de prueba...${NC}"
docker-compose exec -T web python manage.py seed_data

echo ""
echo -e "${GREEN}========================================="
echo "  ✓ EvalPro Django está listo!"
echo "=========================================${NC}"
echo ""
echo "📱 Accede a la aplicación:"
echo "   Web: http://localhost:8000"
echo "   Admin: http://localhost:8000/admin"
echo ""
echo "👤 Credenciales de prueba:"
echo "   Admin: maria@empresa.com / maria123"
echo "   Empleado: juan@empresa.com / juan123"
echo ""
echo "📝 Comandos útiles:"
echo "   Ver logs: docker-compose logs -f web"
echo "   Detener: docker-compose down"
echo "   Shell Django: docker-compose exec web python manage.py shell"
echo ""
echo -e "${GREEN}¡Disfruta de EvalPro Django! 🎉${NC}"
