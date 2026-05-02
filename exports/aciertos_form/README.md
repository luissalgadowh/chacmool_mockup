# 📦 Formulario "Aciertos y Desaciertos" — Export portable

Tres versiones del mismo formulario para que lo copies a cualquier proyecto.

## 📁 Contenido

| Archivo | Stack | Cuándo usarlo |
|---|---|---|
| `index.html` + `styles.css` + `script.js` | **HTML/CSS/JS puro** | Cualquier proyecto, sin dependencias. La versión más portable. |
| `index_tailwind.html` | **Tailwind CSS (CDN)** | Si tu nuevo proyecto ya usa Tailwind o quieres exactamente el mismo look del original. |
| `index_bootstrap.html` | **Bootstrap 5 (CDN)** | Si tu proyecto usa Bootstrap (Django, Rails, Laravel, etc.). |

## 🚀 Cómo probarlo localmente

```bash
# Desde esta carpeta
python3 -m http.server 8080
# Abre http://localhost:8080 → click en "Abrir formulario"
```

O simplemente haz doble click en el `.html` que prefieras.

## 🧩 Cómo integrarlo en tu nuevo proyecto

### Opción A — CSS puro (recomendado para portabilidad)
1. Copia los 3 archivos (`index.html`, `styles.css`, `script.js`).
2. Pega solo el bloque `<div class="modal-backdrop" id="aciertos-modal">...</div>` en tu página.
3. Incluye `styles.css` y `script.js`.
4. Para abrir/cerrar: `document.getElementById('aciertos-modal').classList.toggle('open')`.

### Opción B — Tailwind
1. Si ya tienes Tailwind en tu build, copia solo el `<div id="modal">...</div>`.
2. Si no, deja el `<script src="https://cdn.tailwindcss.com"></script>` (no recomendado para producción).

### Opción C — Bootstrap 5
1. Asegúrate de tener Bootstrap 5 cargado.
2. Copia el `<div class="modal fade" id="aciertosModal">...</div>`.
3. Para abrirlo: añade `data-bs-toggle="modal" data-bs-target="#aciertosModal"` a cualquier botón.

## 🎨 Tokens de diseño (por si quieres re-tematizar)

```
Color base texto:   #0f172a (slate-900)
Color secundario:   #334155 (slate-700)
Bordes:             #e2e8f0 (slate-200)
Fondo modal back:   rgba(0,0,0,0.5)
Verde "Acierto":    #15803d / borde #bbf7d0 / bg #f0fdf4
Rojo "Desacierto":  #b91c1c / borde #fecaca / bg #fef2f2
Azul info:          #1e40af / borde #bfdbfe / bg #eff6ff
Radio cards:        16px (1rem)
Radio inputs:       12px (.75rem)
Radio chips/listas: 8px (.5rem)

FUENTES (Google Fonts):
  Body / texto:      Manrope  (300, 400, 500, 600, 700)
  Títulos h1–h6:     Outfit   (300, 400, 500, 600, 700)
  Fallback:          -apple-system, BlinkMacSystemFont, sans-serif

Import CSS:
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');

Import HTML:
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

## 📤 Cómo descargarlo

Toda la carpeta está en `/app/exports/aciertos_form/`. Puedes:

1. **Push a GitHub** desde el botón "Save to GitHub" del editor.
2. **ZIP**: ejecuta `cd /app && zip -r aciertos_form.zip exports/aciertos_form/`
   y descárgalo desde el explorador de archivos.
3. **Copia/pega manual** de cada archivo (los 5 son cortos).

## 💡 Notas

- La validación de campos requeridos no está incluida — añade tu propio `submit` handler.
- Los íconos son SVG inline (sin librerías externas), excepto en la versión Bootstrap que usa `bootstrap-icons` (opcional).
- Las versiones Tailwind y Bootstrap solo muestran 1 fila por defecto: la lógica de "Agregar" la conectas tú a tu framework (React/Vue/Django/etc.).
