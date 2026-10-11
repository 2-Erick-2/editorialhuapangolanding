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
- **Hosting / CI-CD**: Cloudflare Pages (recomendado) o GitHub Actions + GitHub Pages

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

### URL del sitio (un solo lugar)
La URL pública alimenta la URL canónica, Open Graph, JSON-LD, `robots.txt` y `sitemap.xml`
(estos dos se generan en el build). Se define con la variable de entorno **`VITE_SITE_URL`**
(sin `/` final). Si no existe, se usa el valor por defecto de `vite.config.js`.

```bash
VITE_SITE_URL=https://tudominio.com npm run build
```

### Cloudflare Pages (recomendado)
1. Cloudflare → Workers & Pages → Create → Pages → conectar este repositorio de GitHub.
2. Build command: `npm run build` · Output directory: `dist`.
3. Variables de entorno: `VITE_SITE_URL` = dominio final (p. ej. `https://tudominio.com`).
4. Custom domains → agregar el dominio. `public/_headers` aplica caché y encabezados de seguridad.

### GitHub Pages
`.github/workflows/deploy.yml` publica en cada `push` a `main`:
**https://2-erick-2.github.io/editorialhuapangolanding/**

---

## 📖 Créditos

- **Dirección Editorial**: Dr. Luis Armando Rosado Lara
- **Diseño & Producción**: Editorial Huapango (Reynosa, Tamaulipas, México)
- **Lema**: *«siempre cuenta.»*
