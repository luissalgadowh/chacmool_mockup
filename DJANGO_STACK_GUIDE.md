# 🔄 EvalPro con Django + Bootstrap - Stack Completo

## Comparación de Stacks

### Stack Actual (React + FastAPI)
```
Frontend: React 19 + Tailwind CSS
Backend: FastAPI + Python 3.11
Base de datos: MongoDB
Autenticación: JWT
```

### Stack con Django + Bootstrap
```
Full-Stack: Django 5.0 + Bootstrap 5
Base de datos: PostgreSQL / MongoDB
Autenticación: Django Auth System
Templates: Django Templates / Jinja2
```

---

## 📦 Stack Tecnológico Completo para Django

### 1. Backend (Django)

**Core Framework:**
```python
Django==5.0.1                    # Framework principal
python-decouple==3.8            # Variables de entorno
```

**Base de Datos:**
```python
# Opción A: PostgreSQL (Recomendado para producción)
psycopg2-binary==2.9.9          # Driver PostgreSQL
django-environ==0.11.2          # Configuración DB

# Opción B: MongoDB (si quieres mantener MongoDB)
djongo==1.3.6                   # Django + MongoDB
pymongo==4.6.1                  # Driver MongoDB
```

**Autenticación y Seguridad:**
```python
djangorestframework==3.14.0     # API REST (opcional)
djangorestframework-simplejwt==5.3.1  # JWT (si necesitas API)
django-allauth==0.57.0          # Auth social (opcional)
django-cors-headers==4.3.1      # CORS (si usas API)
```

**Formularios y Validación:**
```python
django-crispy-forms==2.1        # Formularios elegantes
crispy-bootstrap5==2024.2       # Bootstrap 5 para Crispy
django-widget-tweaks==1.5.0     # Personalizar widgets
```

### 2. Frontend (Integrado en Django)

**CSS Framework:**
```
Bootstrap 5.3.2                 # Framework CSS principal
Bootstrap Icons 1.11.3          # Iconografía
```

**JavaScript (opcional, para interactividad):**
```javascript
// Opciones según necesidad:

// Opción A: Vanilla JS + HTMX (Moderno, sin framework)
htmx.org v1.9.10               // Interactividad sin JS pesado
Alpine.js v3.13                // JS reactivo ligero

// Opción B: jQuery (Tradicional)
jQuery 3.7.1                   // Manipulación DOM
DataTables 1.13.8              // Tablas interactivas

// Opción C: Stimulus (Rails-style)
Stimulus 3.2.2                 // Controllers JS ligeros
```

**Gráficos y Visualizaciones:**
```javascript
Chart.js 4.4.0                 // Gráficos y estadísticas
ApexCharts 3.45.0              // Gráficos avanzados (alternativa)
```

### 3. Templates y UI

**Template Engine:**
```python
# Django Templates (incluido)
# O Jinja2 (más potente)
django-jinja==2.11.0
```

**Componentes UI Reutilizables:**
```python
django-components==0.70         # Componentes reutilizables
django-template-partials==23.4  # Partials como en Rails
```

### 4. Assets y Estáticos

**Gestión de Assets:**
```python
django-compressor==4.4          # Minificar CSS/JS
django-webpack-loader==2.0.1    # Webpack (opcional)
whitenoise==6.6.0               # Servir archivos estáticos
```

**Preprocesadores (Opcional):**
```
django-sass-processor==1.4      # SASS/SCSS
django-libsass==0.9             # Compilador SASS
```

### 5. Desarrollo y Testing

**Debug y Desarrollo:**
```python
django-debug-toolbar==4.2.0     # Toolbar de debug
django-extensions==3.2.3        # Comandos útiles
```

**Testing:**
```python
pytest==7.4.3                   # Testing framework
pytest-django==4.7.0            # Pytest + Django
factory-boy==3.3.0              # Fixtures
coverage==7.3.4                 # Cobertura de tests
```

### 6. Producción

**Servidor:**
```python
gunicorn==21.2.0                # WSGI server
uvicorn==0.25.0                 # ASGI server (async)
daphne==4.0.0                   # ASGI para Django Channels
```

**Caché y Performance:**
```python
django-redis==5.4.0             # Redis caché
django-cacheops==7.0.2          # ORM caching
```

---

## 🎨 Mantener el Mismo Diseño

### Para que se vea IDÉNTICO necesitas:

#### 1. **Bootstrap 5 con Custom CSS**
```html
<!-- En tu base.html -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="{% static 'css/custom.css' %}" rel="stylesheet">
```

**Custom CSS (Ya lo tienes en `DESIGN_BOOTSTRAP_DJANGO.md`):**
- Variables CSS para colores Slate
- Clases personalizadas (.btn-primary-custom, .card-custom)
- Transiciones y hover states
- Bordes redondeados (.rounded-xl)

#### 2. **Bootstrap Icons** (Equivalente a Lucide React)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
```

Mapeo de iconos:
```
Lucide React          →  Bootstrap Icons
<User />             →  <i class="bi bi-person"></i>
<Briefcase />        →  <i class="bi bi-briefcase"></i>
<Calendar />         →  <i class="bi bi-calendar"></i>
```

#### 3. **Fuente Inter** (Mismo Typography)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

#### 4. **Interactividad (Modales, Dropdowns, Tabs)**

**Opción A: HTMX (Recomendado - Moderno)**
```html
<script src="https://unpkg.com/htmx.org@1.9.10"></script>
```

Ejemplo de interactividad sin JS pesado:
```html
<!-- Cargar contenido dinámicamente -->
<button hx-get="/api/employee/1" hx-target="#content">
    Ver Perfil
</button>

<div id="content"></div>
```

**Opción B: Alpine.js (Reactivo ligero)**
```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"></script>
```

Ejemplo:
```html
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <div x-show="open">Contenido</div>
</div>
```

**Opción C: Bootstrap JS (Incluido)**
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

---

## 🏗️ Estructura del Proyecto Django

```
evalpro_django/
├── manage.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
│
├── config/                      # Configuración del proyecto
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── apps/
│   ├── core/                    # App principal
│   │   ├── views.py
│   │   ├── models.py
│   │   ├── urls.py
│   │   └── forms.py
│   │
│   ├── employees/               # Gestión de empleados
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── forms.py
│   │   └── urls.py
│   │
│   ├── evaluations/             # Evaluaciones 360
│   │   ├── models.py
│   │   ├── views.py
│   │   └── urls.py
│   │
│   ├── kpis/                    # KPIs
│   ├── pdi/                     # PDI
│   └── matrix/                  # Matriz 9-box
│
├── templates/
│   ├── base.html                # Template base
│   ├── components/              # Componentes reutilizables
│   │   ├── navbar.html
│   │   ├── sidebar.html
│   │   └── card.html
│   │
│   ├── employees/
│   │   ├── list.html
│   │   ├── detail.html
│   │   └── profile.html
│   │
│   ├── evaluations/
│   │   ├── list.html
│   │   └── create.html
│   │
│   └── dashboard.html
│
├── static/
│   ├── css/
│   │   ├── custom.css           # Estilos personalizados
│   │   └── variables.css        # Variables CSS
│   │
│   ├── js/
│   │   ├── main.js
│   │   └── components.js
│   │
│   └── images/
│
└── media/                       # Archivos subidos
```

---

## ⚖️ Comparación de Conceptos

### React → Django Templates

**React JSX:**
```jsx
function EmployeeCard({ employee }) {
  return (
    <div className="card card-custom">
      <h5>{employee.name}</h5>
      <p>{employee.position}</p>
    </div>
  );
}
```

**Django Template:**
```html
<!-- components/employee_card.html -->
<div class="card card-custom">
  <h5>{{ employee.name }}</h5>
  <p>{{ employee.position }}</p>
</div>

<!-- Uso: -->
{% include 'components/employee_card.html' with employee=emp %}
```

### React State → Django Forms/HTMX

**React (Estado local):**
```jsx
const [isOpen, setIsOpen] = useState(false);
```

**Django + Alpine.js:**
```html
<div x-data="{ isOpen: false }">
  <button @click="isOpen = !isOpen">Toggle</button>
</div>
```

**Django + HTMX:**
```html
<button hx-get="/api/content" hx-swap="innerHTML">
  Cargar Contenido
</button>
```

### React Router → Django URLs

**React Router:**
```jsx
<Route path="/employees/:id" element={<EmployeeDetail />} />
```

**Django URLs:**
```python
# urls.py
path('employees/<int:pk>/', EmployeeDetailView.as_view(), name='employee-detail'),
```

### Axios → Django Forms/HTMX

**React + Axios:**
```jsx
axios.post('/api/employees', data)
```

**Django + HTMX:**
```html
<form hx-post="{% url 'employee-create' %}" hx-target="#result">
  {% csrf_token %}
  {{ form.as_p }}
  <button type="submit">Crear</button>
</form>
```

---

## 🚀 Stack Recomendado (Equivalente al Actual)

### Para mantener MÁXIMA similitud:

```
Backend:          Django 5.0
ORM:              Django ORM (PostgreSQL) o Djongo (MongoDB)
Templates:        Django Templates + Jinja2
CSS:              Bootstrap 5 + Custom CSS (Variables Slate)
Icons:            Bootstrap Icons
Fonts:            Inter (Google Fonts)
Interactividad:   HTMX + Alpine.js
Gráficos:         Chart.js
Formularios:      Django Crispy Forms + Bootstrap 5
API (opcional):   Django REST Framework
Auth:             Django Auth System
Caché:            Redis
Servidor:         Gunicorn + Nginx
```

---

## 📊 Ventajas y Desventajas

### ✅ Ventajas de Django + Bootstrap

1. **Monolítico:** Todo en un solo proyecto
2. **Admin Panel:** Django Admin out-of-the-box
3. **ORM Potente:** Consultas complejas fáciles
4. **Autenticación:** Sistema completo incluido
5. **Templates:** Server-side rendering (SEO friendly)
6. **Batteries Included:** Muchas funcionalidades integradas
7. **Menos Configuración:** No necesitas compilar frontend
8. **Despliegue Simple:** Un solo servidor

### ⚠️ Desventajas vs React

1. **Interactividad:** Menos fluida que React (se compensa con HTMX)
2. **UX:** No tan "snappy" como SPA
3. **Estado:** No hay estado global reactivo (necesitas HTMX/Alpine)
4. **Modularidad:** Menos modular que React components

---

## 💡 Recomendaciones para Máxima Similitud

### 1. **Usar HTMX para Interactividad**
```html
<!-- Navegación sin recargar página -->
<a href="/employees" hx-get="/employees" hx-target="#main-content" hx-push-url="true">
    Empleados
</a>
```

### 2. **Alpine.js para Componentes Reactivos**
```html
<!-- Dropdown interactivo -->
<div x-data="{ open: false }" @click.away="open = false">
  <button @click="open = !open">Menu</button>
  <div x-show="open">Opciones</div>
</div>
```

### 3. **Django Components para Reutilización**
```python
# components.py
from django_components import component

@component.register("employee_card")
class EmployeeCard(component.Component):
    template_name = "components/employee_card.html"
```

### 4. **Crispy Forms para Formularios Elegantes**
```python
# forms.py
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit

class EmployeeForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_class = 'row g-3'
        self.helper.layout = Layout(
            Div('first_name', css_class='col-md-6'),
            Div('last_name', css_class='col-md-6'),
            Submit('submit', 'Guardar', css_class='btn btn-primary-custom')
        )
```

### 5. **Custom CSS (Ya documentado)**
Usa el archivo `custom.css` del documento `DESIGN_BOOTSTRAP_DJANGO.md`

---

## 🎯 Resultado Final

Con este stack, tu aplicación Django se verá **IDÉNTICA** al actual EvalPro:

- ✅ Mismos colores (Slate)
- ✅ Misma tipografía (Inter)
- ✅ Mismos componentes (Cards, Botones, Forms)
- ✅ Mismos iconos (Bootstrap Icons ≈ Lucide)
- ✅ Misma interactividad (HTMX + Alpine.js)
- ✅ Mismas transiciones y animaciones
- ✅ Mismo layout responsivo

**Diferencia principal:** Renderizado server-side en lugar de client-side (pero con HTMX se siente casi igual).

---

## 📦 Ejemplo de requirements.txt Completo

```txt
# Core
Django==5.0.1
python-decouple==3.8

# Base de datos
psycopg2-binary==2.9.9
# o djongo==1.3.6 (para MongoDB)

# Formularios y UI
django-crispy-forms==2.1
crispy-bootstrap5==2024.2
django-widget-tweaks==1.5.0
django-components==0.70

# Assets
whitenoise==6.6.0
django-compressor==4.4

# Auth (opcional para API)
djangorestframework==3.14.0
djangorestframework-simplejwt==5.3.1
django-cors-headers==4.3.1

# Desarrollo
django-debug-toolbar==4.2.0
django-extensions==3.2.3

# Testing
pytest==7.4.3
pytest-django==4.7.0
coverage==7.3.4

# Producción
gunicorn==21.2.0
django-redis==5.4.0
```

---

## 🔗 Recursos Útiles

**HTMX:**
- Docs: https://htmx.org/docs/
- Examples: https://htmx.org/examples/

**Alpine.js:**
- Docs: https://alpinejs.dev/
- Start: https://alpinejs.dev/start-here

**Django Crispy Forms:**
- Docs: https://django-crispy-forms.readthedocs.io/

**Bootstrap 5:**
- Docs: https://getbootstrap.com/docs/5.3/

---

## ✅ Conclusión

**SÍ, es 100% posible** recrear EvalPro con Django + Bootstrap y mantener el mismo diseño.

**Stack mínimo recomendado:**
```
Django 5.0
Bootstrap 5
Bootstrap Icons
HTMX
Alpine.js (opcional)
Chart.js
Django Crispy Forms
Custom CSS (ya documentado en DESIGN_BOOTSTRAP_DJANGO.md)
```

Con este stack, tendrás una aplicación que:
- Se ve IDÉNTICA
- Es más fácil de desplegar
- Tiene mejor SEO
- Es monolítica (más simple)

**¿Quieres que cree un proyecto Django inicial con este stack y el mismo diseño?**
