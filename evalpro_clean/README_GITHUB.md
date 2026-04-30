# 🚀 EvalPro - Django + Bootstrap

Sistema de evaluación de empleados construido con **Django 5.0** y **Bootstrap 5**.

## 📋 Stack Tecnológico

- **Framework:** Django 5.0
- **Base de Datos:** PostgreSQL 15
- **Frontend:** Django Templates + Bootstrap 5
- **CSS:** Bootstrap 5 + Custom CSS (Paleta Slate)
- **Iconos:** Bootstrap Icons 1.11
- **Fuente:** Inter (Google Fonts)
- **Formularios:** Django Crispy Forms
- **Interactividad:** HTMX + Alpine.js
- **Servidor:** Gunicorn

---

## ⚡ Inicio Rápido

### Con Docker (Recomendado)

```bash
# Iniciar servicios
./scripts/start.sh

# Acceder a:
# http://localhost:8000
```

### Sin Docker

```bash
# 1. Crear entorno virtual
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# o
venv\Scripts\activate  # Windows

# 2. Instalar dependencias
pip install -r requirements.txt

# 3. Configurar .env
cp .env.example .env
# Editar .env con tus datos de PostgreSQL

# 4. Ejecutar migraciones
python manage.py migrate

# 5. Cargar datos de prueba
python manage.py seed_data

# 6. Iniciar servidor
python manage.py runserver
```

---

## 🔑 Credenciales de Prueba

**Administrador:**
- Email: `maria@empresa.com`
- Password: `maria123`

**Empleado:**
- Email: `juan@empresa.com`
- Password: `juan123`

---

## 📁 Estructura

```
evalpro/
├── config/              # Configuración Django
├── apps/
│   ├── core/           # App principal (Login, Dashboard)
│   ├── employees/      # Gestión de empleados
│   ├── evaluations/    # Evaluaciones 360
│   ├── kpis/           # KPIs
│   ├── pdi/            # PDI
│   └── matrix/         # Matriz 9-box
├── templates/          # Templates HTML
├── static/             # CSS, JS, imágenes
├── media/              # Archivos subidos
└── scripts/            # Scripts de utilidad
```

---

## 🎨 Diseño

El proyecto usa **Bootstrap 5** con **Custom CSS** que implementa la paleta de colores **Slate**.

**Documentación completa:** Ver `DESIGN_GUIDE.md`

---

## 📚 Comandos Útiles

```bash
# Migraciones
python manage.py makemigrations
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Cargar datos de prueba
python manage.py seed_data

# Ejecutar servidor
python manage.py runserver

# Shell Django
python manage.py shell

# Collectstatic
python manage.py collectstatic
```

---

## 🐳 Docker

```bash
# Iniciar
docker-compose up -d

# Detener
docker-compose down

# Logs
docker-compose logs -f web

# Ejecutar comandos
docker-compose exec web python manage.py shell
```

---

## 🚀 Despliegue

Ver documentación completa en `README.md` para:
- Configuración de producción
- Variables de entorno seguras
- Nginx + Gunicorn
- HTTPS con Let's Encrypt

---

## 📄 Licencia

Proyecto privado.

---

## ✨ Características Implementadas

- ✅ Autenticación Django (login/logout)
- ✅ Dashboard con estadísticas
- ✅ Modelo Employee completo
- ✅ Diseño Bootstrap 5 personalizado
- ✅ Sistema de permisos (admin/empleado)
- ✅ Docker setup completo
- ✅ Templates responsive
- ✅ Custom CSS (Paleta Slate)

---

**¿Listo para desarrollar?** 🎉

Lee la documentación completa en `README.md` o ejecuta `./scripts/start.sh`
