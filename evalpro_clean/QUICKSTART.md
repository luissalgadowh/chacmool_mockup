# 🚀 Inicio Rápido - EvalPro Django

## ⚡ Opción 1: Docker (Recomendado)

```bash
cd /app/evalpro_django

# Iniciar todo automáticamente
./scripts/start.sh
```

**¡Listo!** Accede a http://localhost:8000

---

## 💻 Opción 2: Instalación Local

```bash
cd /app/evalpro_django

# 1. Crear entorno virtual
python3 -m venv venv
source venv/bin/activate

# 2. Instalar dependencias
pip install -r requirements.txt

# 3. Configurar .env
cp .env.example .env

# 4. Ejecutar migraciones
python manage.py migrate

# 5. Cargar datos de prueba
python manage.py seed_data

# 6. Iniciar servidor
python manage.py runserver
```

Accede a http://localhost:8000

---

## 🔑 Credenciales de Prueba

**Admin:**
```
Email: maria@empresa.com
Password: maria123
```

**Empleado:**
```
Email: juan@empresa.com
Password: juan123
```

---

## 🎯 Comandos Principales

```bash
# Activar entorno virtual
source venv/bin/activate

# Ejecutar servidor
python manage.py runserver

# Crear superusuario
python manage.py createsuperuser

# Migraciones
python manage.py makemigrations
python manage.py migrate

# Django shell
python manage.py shell
```

---

## 🐳 Comandos Docker

```bash
# Iniciar
docker-compose up -d

# Detener
docker-compose down

# Ver logs
docker-compose logs -f web

# Ejecutar comandos
docker-compose exec web python manage.py shell
```

---

## 📍 URLs

- **Web:** http://localhost:8000
- **Admin:** http://localhost:8000/admin
- **API (opcional):** http://localhost:8000/api/

---

## ✅ Checklist

- [ ] Docker instalado (o Python 3.11+)
- [ ] PostgreSQL corriendo (local o Docker)
- [ ] Dependencias instaladas
- [ ] Migraciones ejecutadas
- [ ] Datos de prueba cargados
- [ ] Servidor corriendo
- [ ] Login exitoso

---

## 📚 Documentación Completa

Ver `README.md` para información detallada.

---

**¿Todo listo?** ¡Comienza a desarrollar con Django + Bootstrap! 🎉
