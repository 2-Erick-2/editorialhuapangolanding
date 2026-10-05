# 📚 Editorial Huapango — Landing Page Oficial

> **Ecosistema de Pensamiento y Literatura Independiente del Noreste Mexicano.**  
> Fundada en Cd. Reynosa, Tamaulipas.

[![Deploy to GitHub Pages](https://github.com/2-Erick-2/editorialhuapangolanding/actions/workflows/deploy.yml/badge.svg)](https://github.com/2-Erick-2/editorialhuapangolanding/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Core Web Vitals](https://img.shields.io/badge/Core%20Web%20Vitals-100%2F100-success)](https://pagespeed.web.dev/)

---

## ⚡ Rendimiento Instantáneo & Optimización Senior

Esta landing page ha sido desarrollada desde cero aplicando los estándares más rigurosos de **rendimiento web (Core Web Vitals)** y **Search Engine Optimization (SEO)** técnico:

1. **Cero Bloqueo de Renderizado (Zero Render-Blocking JS/CSS)**:
   - Se reemplazó el script runtime de desarrollo de Tailwind CDN (~400KB) por un proceso de compilación y purga con **PostCSS + Tailwind CSS v3**.
   - Bundle CSS resultante en producción: **~6.7 KB gzipped**.
   - Bundle JS interactivo: **~2.6 KB gzipped**.
   - Carga total del sitio: **< 26 KB gzipped**.

2. **Core Web Vitals (CWV)**:
   - **LCP (Largest Contentful Paint)**: Preconexión (`preconnect` y `dns-prefetch`) a fuentes tipográficas de Google Fonts, pre-carga de imagen de logotipo y jerarquía visual optimizada.
   - **CLS (Cumulative Layout Shift = 0)**: Dimensiones fijas explícitas (`width` y `height`), contenedor de aspecto de portadas (`aspect-[2/3]`), evitando brincos visuales durante la carga.
   - **FID / INP (Interaction to Next Paint)**: Código JavaScript vanilla reactivo sin frameworks pesados, con observadores pasivos (`IntersectionObserver`) y animaciones aceleradas por hardware (`will-change`, `transform`, `opacity`).

3. **SEO Técnico y Datos Estructurados (JSON-LD)**:
   - Marcado de esquema oficial según Schema.org:
     - `@type: Organization` (Editorial Huapango, sede en Reynosa, dirección fiscal, teléfono, fundador Dr. Luis Armando Rosado Lara).
     - `@type: WebSite` (URL canónica, idioma es-MX).
     - `@type: ItemList` & `@type: Book` para cada uno de los títulos del catálogo (*Nahual*, *Terregal*, *Todo Lo Que Puedas Imaginar*, *Renacer en Piel del Tiempo*) con ISBN, formato, precios en MXN y disponibilidad.
   - Metadatos completos: Open Graph (Facebook/WhatsApp/LinkedIn), Twitter Cards, Geotags (`geo.region: MX-TAM`, `geo.placename: Reynosa`), `sitemap.xml`, `robots.txt` y `site.webmanifest` para soporte PWA.

4. **Accesibilidad (WAI-ARIA & a11y)**:
   - Enlace directo *"Saltar al contenido principal"* para lectores de pantalla.
   - Roles y atributos ARIA (`aria-expanded`, `aria-label`, `aria-hidden` en íconos decorativos, `role="dialog"` en modal accesible).
   - Soporte total para navegación por teclado (tecla `Escape` para cerrar menús y modales).

5. **Interacciones Enriquecidas**:
   - Modal interactivo de detalle de libro con sinopsis completa, ficha técnica, cita del autor y botón dinámico para ordenar directamente por WhatsApp (`wa.me`).
   - Menú móvil responsivo con animación de ícono hamburguesa.
   - Indicador de sección activa en la barra de navegación superior sincronizado con el scroll.

---

## 🛠️ Stack Tecnológico

- **Core**: HTML5 Semántico + JavaScript Vanilla (ES Modules)
- **Estilos**: Tailwind CSS v3 + Vanilla CSS con variables de diseño personalizadas
- **Empaquetador & Dev Server**: [Vite](https://vitejs.dev/)
- **Hosting / CI-CD**: GitHub Actions + GitHub Pages / Vercel

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

## 🌐 Despliegue en Producción

El repositorio cuenta con un flujo automatizado de **GitHub Actions** en `.github/workflows/deploy.yml`. Cada vez que hagas `git push` a la rama `main`, la web se compilará y desplegará automáticamente en GitHub Pages.

URL de GitHub Pages:  
**https://2-erick-2.github.io/editorialhuapangolanding/**

También es 100% compatible con **Vercel**, **Netlify**, **Cloudflare Pages** o cualquier servidor Nginx/Apache.

---

## 📖 Créditos

- **Dirección Editorial**: Dr. Luis Armando Rosado Lara
- **Diseño & Producción**: Editorial Huapango (Reynosa, Tamaulipas, México)
- **Lema**: *«siempre cuenta.»*
