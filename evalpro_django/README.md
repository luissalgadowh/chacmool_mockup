# 🚀 EvalPro Django - Sistema de Evaluación de Empleados

Sistema completo de evaluación de empleados construido con **Django 5 + Bootstrap 5** con el mismo diseño del proyecto original React + FastAPI.

## 📋 Stack Tecnológico

- **Backend:** Django 5.0
- **Base de Datos:** PostgreSQL 15
- **Frontend:** Django Templates + Bootstrap 5
- **CSS:** Bootstrap 5 + Custom CSS (Variables Slate)
- **Iconos:** Bootstrap Icons
- **Fuente:** Inter (Google Fonts)
- **Interactividad:** HTMX + Alpine.js
- **Forms:** Django Crispy Forms
- **Servidor:** Gunicorn

---

## 🚀 Inicio Rápido con Docker

### Paso 1: Clonar y Configurar

```bash
cd /app/evalpro_django

# Crear archivo .env
cp .env.example .env

# Editar .env si es necesario
nano .env
```

### Paso 2: Iniciar con Docker

```bash
# Construir e iniciar servicios
docker-compose up --build

# En otra terminal, crear superusuario
docker-compose exec web python manage.py createsuperuser

# Cargar datos de prueba
docker-compose exec web python manage.py loaddata seed.json
```

### Paso 3: Acceder

- **Aplicación:** http://localhost:8000
- **Admin:** http://localhost:8000/admin

---

## 💻 Instalación Local (sin Docker)

### Requisitos

- Python 3.11+
- PostgreSQL 15+
- pip y virtualenv

### Instalación

```bash
cd /app/evalpro_django

# Crear entorno virtual
python3 -m venv venv
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar base de datos
# Asegúrate de tener PostgreSQL corriendo
createdb evalpro_db

# Copiar .env
cp .env.example .env

# Editar .env con tus credenciales de PostgreSQL
nano .env

# Ejecutar migraciones
python manage.py makemigrations
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Cargar datos de prueba (opcional)
python manage.py loaddata seed.json

# Ejecutar servidor
python manage.py runserver
```

Accede a: http://localhost:8000

---

## 📁 Estructura del Proyecto

```
evalpro_django/
├── config/                      # Configuración Django
│   ├── settings.py             # Settings principal
│   ├── urls.py                 # URLs principales
│   ├── wsgi.py                 # WSGI
│   └── asgi.py                 # ASGI
│
├── apps/
│   ├── core/                   # App principal
│   │   ├── models.py           # Employee model
│   │   ├── views.py            # Login, Dashboard, Profile
│   │   └── urls.py             # URLs core
│   │
│   ├── employees/              # Gestión de empleados
│   ├── evaluations/            # Evaluaciones 360
│   ├── kpis/                   # KPIs
│   ├── pdi/                    # PDI
│   └── matrix/                 # Matriz 9-box
│
├── templates/
│   ├── base.html               # Template base
│   ├── components/             # Componentes reutilizables
│   │   └── navbar.html
│   └── pages/                  # Páginas
│       ├── login.html
│       ├── dashboard.html
│       └── profile.html
│
├── static/
│   └── css/
│       └── custom.css          # Estilos personalizados
│
├── media/                      # Archivos subidos
├── scripts/                    # Scripts de utilidad
├── requirements.txt            # Dependencias Python
├── Dockerfile                  # Docker
├── docker-compose.yml          # Orquestación
├── manage.py                   # Django CLI
└── README.md                   # Este archivo
```

---

## 🎨 Diseño

El proyecto usa **Bootstrap 5** con **Custom CSS** que replica el diseño original de Tailwind:

### Variables CSS (Colores Slate)
```css
--bs-gray-50: #f8fafc;    /* Fondo */
--bs-gray-900: #0f172a;   /* Texto principal */
--color-blue: #2563eb;    /* Acento */
```

### Componentes Principales
- `.btn-primary-custom` - Botones primarios (slate-900)
- `.btn-secondary-custom` - Botones secundarios (outline)
- `.card-custom` - Cards con sombra
- `.form-control-custom` - Inputs personalizados
- `.nav-tabs-custom` - Tabs horizontales
- `.table-custom` - Tablas estilizadas

**Documentación completa:** Ver `/DESIGN_GUIDE.md`

---

## 👤 Credenciales de Prueba

Después de ejecutar `loaddata seed.json`:

**Administrador:**
- Email: `maria@empresa.com`
- Password: `maria123`

**Empleado:**
- Email: `juan@empresa.com`
- Password: `juan123`

---

## 🛠️ Comandos Útiles

### Django Management

```bash
# Activar entorno virtual
source venv/bin/activate

# Migraciones
python manage.py makemigrations
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Cargar datos de prueba
python manage.py loaddata seed.json

# Ejecutar servidor de desarrollo
python manage.py runserver

# Ejecutar shell de Django
python manage.py shell

# Crear app nueva
python manage.py startapp nombre_app apps/nombre_app
```

### Docker

```bash
# Iniciar servicios
docker-compose up -d

# Detener servicios
docker-compose down

# Ver logs
docker-compose logs -f

# Ejecutar comandos en contenedor
docker-compose exec web python manage.py migrate
docker-compose exec web python manage.py createsuperuser

# Reconstruir después de cambios
docker-compose up --build

# Acceder a shell del contenedor
docker-compose exec web bash
docker-compose exec db psql -U postgres evalpro_db
```

### Static Files

```bash
# Recopilar archivos estáticos
python manage.py collectstatic

# Limpiar archivos estáticos
python manage.py collectstatic --clear --noinput
```

---

## 📊 Modelos Principales

### Employee (apps/core/models.py)
```python
class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    employee_id = models.CharField(max_length=20, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    position = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    is_admin = models.BooleanField(default=False)
    # ... más campos
```

---

## 🔧 Configuración

### Variables de Entorno (.env)

```env
# Django
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DB_NAME=evalpro_db
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost  # or 'db' for Docker
DB_PORT=5432
```

**Generar SECRET_KEY seguro:**
```bash
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```

---

## 🚀 Despliegue en Producción

### 1. Configurar Variables de Entorno

```env
DEBUG=False
SECRET_KEY=your-super-secret-key
ALLOWED_HOSTS=tudominio.com,www.tudominio.com
```

### 2. Configurar Base de Datos

Usa PostgreSQL en producción (no SQLite).

### 3. Configurar Static Files

```bash
python manage.py collectstatic --noinput
```

### 4. Usar Gunicorn + Nginx

```bash
gunicorn config.wsgi:application --bind 0.0.0.0:8000 --workers 3
```

### 5. HTTPS con Let's Encrypt

Ver `/PRODUCTION.md` del proyecto React para referencia de configuración Nginx.

---

## 🐛 Troubleshooting

### Error: No module named 'config'

```bash
# Asegúrate de estar en el directorio correcto
cd /app/evalpro_django
python manage.py runserver
```

### Error: Database connection failed

```bash
# Verificar que PostgreSQL esté corriendo
sudo systemctl status postgresql

# Verificar credenciales en .env
cat .env
```

### Error: Static files not found

```bash
# Recopilar archivos estáticos
python manage.py collectstatic --noinput

# Verificar STATIC_ROOT en settings.py
```

### Error: Port 8000 already in use

```bash
# Encontrar proceso usando el puerto
sudo lsof -i :8000

# Matar proceso
kill -9 <PID>
```

---

## 📚 Recursos Adicionales

- **Django Docs:** https://docs.djangoproject.com/
- **Bootstrap 5 Docs:** https://getbootstrap.com/docs/5.3/
- **Crispy Forms:** https://django-crispy-forms.readthedocs.io/
- **HTMX:** https://htmx.org/docs/
- **Alpine.js:** https://alpinejs.dev/

---

## ✅ Próximos Pasos

Después de la instalación:

1. **Explorar el Admin Panel:** http://localhost:8000/admin
2. **Personalizar el diseño:** Editar `/static/css/custom.css`
3. **Agregar nuevas apps:** `python manage.py startapp nombre_app`
4. **Implementar evaluaciones 360:** Ver apps/evaluations/
5. **Configurar emails:** Agregar EMAIL_BACKEND en settings.py
6. **Agregar tests:** `pytest`

---

## 🤝 Comparación con Proyecto React

| Aspecto | React + FastAPI | Django + Bootstrap |
|---------|----------------|-------------------|
| **Renderizado** | Client-side (SPA) | Server-side (Templates) |
| **Estado** | React Hooks | HTMX + Alpine.js |
| **CSS** | Tailwind CSS | Bootstrap 5 + Custom |
| **Iconos** | Lucide React | Bootstrap Icons |
| **Forms** | React Hook Form | Django Forms + Crispy |
| **API** | FastAPI (separado) | Django Views (integrado) |
| **Auth** | JWT | Django Sessions |
| **Despliegue** | 2 servicios | 1 servicio |

**Diseño:** Ambos se ven **idénticos** gracias al Custom CSS.

---

## 📄 Licencia

Este proyecto es privado y confidencial.

---

## 🎉 ¡Listo!

Tu aplicación Django con Bootstrap está lista. Accede a http://localhost:8000 y comienza a desarrollar.

**¿Necesitas ayuda?** Revisa la documentación o los logs del servidor.
