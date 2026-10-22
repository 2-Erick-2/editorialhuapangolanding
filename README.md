# 📚 Editorial Huapango — Landing Page Oficial

> **Ecosistema de Pensamiento y Literatura Independiente del Noreste Mexicano.**  
> Fundada en Cd. Reynosa, Tamaulipas.

[![Deploy to GitHub Pages](https://github.com/2-Erick-2/editorialhuapangolanding/actions/workflows/deploy.yml/badge.svg)](https://github.com/2-Erick-2/editorialhuapangolanding/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ Rendimiento y SEO

Lighthouse sobre el build de producción (octubre 2026):

| | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Móvil | 96 | 100 | 100 | 100 |
| Escritorio | 100 | 100 | 100 | 100 |

- **Fuentes autoalojadas** (`@fontsource-variable`, solo subset latino y precargadas): sin dependencia de Google Fonts.
- **Imágenes**: portadas en WebP con `srcset` (260 y 500 px) y JPG de respaldo; logo vectorizado en SVG.
- **CLS = 0**: todas las imágenes declaran `width`/`height` y proporción.
- **JS vanilla** (~3 KB gzip) con `IntersectionObserver`; respeta `prefers-reduced-motion`.
- **JSON-LD**: `Organization`, `WebSite` e `ItemList` de `Book` con portada, editorial y oferta enlazada a Mercado Libre.
- **Open Graph / Twitter**: imagen 1200×630 (`public/og-image.jpg`).
- **Accesibilidad**: ficha técnica con manejo y retención de foco, navegación completa por teclado.

---

## 🛠️ Stack Tecnológico

- **Core**: HTML5 Semántico + JavaScript Vanilla (ES Modules)
- **Estilos**: Tailwind CSS v3 + Vanilla CSS con variables de diseño personalizadas
- **Empaquetador & Dev Server**: [Vite](https://vitejs.dev/)
- **Hosting / CI-CD**: Vercel (producción) · GitHub Pages (respaldo manual)

---

## 🚀 Inicio Rápido en Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/2-Erick-2/editorialhuapangolanding.git
cd editorialhuapangolanding
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo local
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000) (o el puerto indicado en tu terminal).

### 4. Compilar para producción
```bash
npm run build
```
Los archivos estáticos optimizados y minificados se generarán en la carpeta `dist/`.

### 5. Previsualizar la versión de producción
```bash
npm run preview
```

---

## 🌐 Dominio y despliegue

**Producción:** https://editorialhuapango.com.mx (Vercel)

### URL del sitio (un solo lugar)
La URL pública alimenta la URL canónica, Open Graph, JSON-LD, `robots.txt` y `sitemap.xml`
(estos dos se generan en el build). Valor por defecto en `vite.config.js`
(`DEFAULT_SITE_URL`); se puede sobrescribir con la variable de entorno **`VITE_SITE_URL`**.

### Vercel
- `vercel.json` define build (`npm run build` → `dist`), caché inmutable para `/assets` y encabezados de seguridad.
- Cada `push` a `main` despliega a producción; cada rama/PR genera una vista previa.
- Dominio: `editorialhuapango.com.mx` como principal y `www` redirigido a él (Settings → Domains).

### DNS (no cambiar nameservers)
El correo usa **Zoho Mail** (registros MX/SPF/TXT en el DNS actual). Solo se editan estos registros
en el panel del proveedor del dominio, con los valores que muestre Vercel:

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | IP que indique Vercel (p. ej. `76.76.21.21`) |
| CNAME | `www` | CNAME del proyecto que indique Vercel |

### GitHub Pages (respaldo)
`.github/workflows/deploy.yml` ya no corre en cada push; se ejecuta manualmente desde Actions.

---

## 📖 Créditos

- **Dirección Editorial**: Dr. Luis Armando Rosado Lara
- **Diseño & Producción**: Editorial Huapango (Reynosa, Tamaulipas, México)
- **Lema**: *«siempre cuenta.»*
