# 📤 Guía: Subir EvalPro Django a GitHub y Usarlo en Nueva Conversación

Esta guía te explica paso a paso cómo subir **SOLO** el proyecto Django + Bootstrap a GitHub y usarlo en una conversación nueva de Emergent.

---

## 📦 Proyecto Limpio Creado

He preparado una versión limpia del proyecto Django en:

**Ubicación:** `/app/evalpro_clean/`

**Contiene SOLO:**
- ✅ Django 5.0
- ✅ Bootstrap 5
- ✅ PostgreSQL
- ✅ Custom CSS (Paleta Slate)
- ✅ Templates
- ✅ Docker setup

**NO contiene:**
- ❌ React
- ❌ FastAPI  
- ❌ Tailwind
- ❌ TypeScript
- ❌ MongoDB
- ❌ Node.js

---

## 🚀 Opción 1: Usar "Save to GitHub" de Emergent (Más Fácil)

### Paso 1: Guardar en esta conversación

En el chat actual:

1. **Haz clic en el botón "Save to GitHub"** (arriba a la derecha)
2. Se te pedirá conectar tu cuenta de GitHub (si no lo has hecho)
3. **Nombre del repositorio:** `evalpro-django-bootstrap`
4. **Descripción:** "Sistema de evaluación de empleados - Django + Bootstrap"
5. **Visibilidad:** Privado (recomendado)
6. **Seleccionar archivos:**
   - Desmarca todo EXCEPTO la carpeta `/app/evalpro_clean/`
   - O selecciona todos los archivos y dile "Save only /app/evalpro_clean/"

### Paso 2: Nueva conversación

1. **Inicia un nuevo chat en Emergent**
2. **Haz clic en "Pull from GitHub"**
3. **Selecciona el repositorio:** `evalpro-django-bootstrap`
4. **¡Listo!** Ya puedes continuar trabajando

---

## 🔧 Opción 2: Manual (Más Control)

### Paso 1: Descargar el proyecto

En esta conversación:

```bash
# Crear archivo comprimido
cd /app
tar -czf evalpro-django-clean.tar.gz evalpro_clean/
```

Luego:
- Descarga el archivo desde Emergent (botón de descarga)
- O usa el botón "Download Code" para bajar todo

### Paso 2: En tu máquina local

```bash
# Extraer
tar -xzf evalpro-django-clean.tar.gz
cd evalpro_clean

# Inicializar Git
git init
git add .
git commit -m "Initial commit: EvalPro Django + Bootstrap"

# Crear repositorio en GitHub
# Ve a https://github.com/new
# Nombre: evalpro-django-bootstrap
# Visibilidad: Privado

# Subir a GitHub
git remote add origin https://github.com/TU-USUARIO/evalpro-django-bootstrap.git
git branch -M main
git push -u origin main
```

### Paso 3: Nueva conversación en Emergent

1. **Nuevo chat**
2. **"Pull from GitHub"**
3. **URL:** `https://github.com/TU-USUARIO/evalpro-django-bootstrap`
4. **¡Listo!**

---

## 🎯 Opción 3: Desde Emergent Directamente (Si tiene Git)

Si Emergent permite ejecutar comandos Git:

```bash
cd /app/evalpro_clean

# Inicializar repo
git init
git add .
git commit -m "Initial commit: EvalPro Django"

# Configurar GitHub (necesitas token)
git remote add origin https://TU-TOKEN@github.com/TU-USUARIO/evalpro-django.git
git branch -M main
git push -u origin main
```

---

## ✅ Verificar Antes de Subir

El proyecto limpio incluye:

```
evalpro_clean/
├── config/                 ✅ Django settings
├── apps/
│   ├── core/              ✅ Login, Dashboard, Employee model
│   ├── employees/         ✅ Estructura base
│   ├── evaluations/       ✅ Estructura base
│   ├── kpis/              ✅ Estructura base
│   ├── pdi/               ✅ Estructura base
│   └── matrix/            ✅ Estructura base
├── templates/             ✅ Bootstrap templates
├── static/
│   └── css/
│       └── custom.css     ✅ Estilos Slate
├── requirements.txt       ✅ Solo Python/Django
├── docker-compose.yml     ✅ PostgreSQL + Django
├── Dockerfile             ✅ Solo Django
├── .gitignore             ✅ Configurado
├── .env.example           ✅ Variables de entorno
├── manage.py              ✅ Django CLI
└── README.md              ✅ Documentación completa
```

**Tamaño aproximado:** ~500 KB (sin venv, sin node_modules)

---

## 🆕 Iniciar Nueva Conversación

Una vez el código esté en GitHub:

### En Emergent:

1. **Haz clic en "New Chat"** (o abre nueva pestaña)
2. **Haz clic en "Pull from GitHub"**
3. **Ingresa la URL:** `https://github.com/TU-USUARIO/evalpro-django-bootstrap`
4. **Espera a que clone el repositorio**
5. **¡Listo!** Ahora puedes decir:

```
"Hola, necesito continuar desarrollando este proyecto Django.
Quiero agregar la funcionalidad de lista de empleados en apps/employees/"
```

El agente tendrá contexto completo del proyecto Django limpio.

---

## 💡 Recomendaciones

### Para la Nueva Conversación:

**Mensaje inicial sugerido:**
```
Hola, este es un proyecto Django + Bootstrap para evaluación de empleados.

Stack:
- Django 5.0
- Bootstrap 5
- PostgreSQL
- Custom CSS con paleta Slate

Necesito continuar desarrollando las funcionalidades de:
1. Lista de empleados (apps/employees/)
2. Evaluaciones 360 (apps/evaluations/)
3. [lo que necesites]

El diseño ya está implementado con Bootstrap y custom CSS en /static/css/custom.css
```

### Archivo README.md

El proyecto ya incluye:
- Instrucciones de instalación
- Comandos útiles
- Credenciales de prueba
- Estructura del proyecto
- Documentación de diseño

---

## 📋 Checklist

Antes de subir a GitHub:

- [ ] Ejecutar `./scripts/prepare_for_github.sh`
- [ ] Verificar que `.gitignore` esté correcto
- [ ] Confirmar que `.env` NO esté incluido (solo .env.example)
- [ ] README.md está completo
- [ ] No hay archivos de React/FastAPI/Node

---

## ❓ FAQ

**P: ¿Perderé el proyecto React original?**
R: No, el proyecto React sigue en `/app/`. Este es una copia limpia en `/app/evalpro_clean/`.

**P: ¿Puedo seguir editando en esta conversación?**
R: Sí, pero es mejor iniciar una conversación nueva con el repo de GitHub para contexto limpio.

**P: ¿Necesito configurar algo en la nueva conversación?**
R: No, el agente detectará automáticamente que es un proyecto Django y trabajará con eso.

**P: ¿Qué pasa con las credenciales y .env?**
R: `.env` NO se sube a GitHub (está en .gitignore). Usa `.env.example` como plantilla.

---

## 🎉 ¡Listo!

Tu proyecto Django limpio está preparado para:
1. ✅ Subir a GitHub
2. ✅ Usar en nueva conversación
3. ✅ Desarrollar sin código React/FastAPI

**Próximo paso:** Elige una opción arriba y sube el proyecto a GitHub.
