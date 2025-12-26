# 🦕 Gatisaurios - Aplicación Web Interactiva

Plataforma web para niños donde pueden colorear Gatisaurios, escuchar cuentos y jugar.

## 🚀 Stack Tecnológico

- **React 18** + **Vite** - Frontend
- **Tailwind CSS** - Estilos
- **Supabase** - Backend (Auth + Database + Storage)
- **Zustand** - Estado global
- **React Router** - Navegación
- **Cloudflare Pages** - Hosting

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de Supabase

# Iniciar desarrollo
npm run dev

# Build para producción
npm run build
```

## 🔧 Variables de Entorno

Crea un archivo `.env` con:

```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_anon_key
```

## 🌐 Deploy en Cloudflare Pages

1. Haz push a GitHub
2. Conecta el repositorio en Cloudflare Pages
3. Configuración de build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:** Agregar `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`

Ver [DEPLOY.md](./DEPLOY.md) para instrucciones detalladas.

## 📚 Documentación

- [SETUP_COMPLETADO.md](./SETUP_COMPLETADO.md) - Configuración inicial
- [DEPLOY.md](./DEPLOY.md) - Guía de deployment

## 🎨 Características

- ✅ Autenticación con Google
- 🚧 Herramienta de coloreado SVG
- 🚧 Galería personal de dibujos
- 🚧 Exportación a PDF
- 🚧 Reproductor de cuentos
- 🚧 Juegos interactivos
- 🚧 Tienda online

## 📄 Licencia

© 2025 Gatisaurios. Todos los derechos reservados.
