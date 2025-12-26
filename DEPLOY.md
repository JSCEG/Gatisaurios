# Gatisaurios - Deployment Guide

## 📋 Pre-requisitos

1. ✅ Proyecto React + Vite configurado
2. ✅ Supabase configurado
3. ✅ Cuenta de GitHub
4. ✅ Cuenta de Cloudflare

---

## 🚀 Deploy a Cloudflare Pages

### **Paso 1: Preparar el repositorio en GitHub**

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Gatisaurios React App"

# Crear repositorio en GitHub (ve a github.com)
# Luego conecta el repositorio local:
git remote add origin https://github.com/TU-USUARIO/gatisaurios.git
git branch -M main
git push -u origin main
```

### **Paso 2: Configurar Cloudflare Pages**

1. **Ir a Cloudflare Pages:**
   - Ve a https://dash.cloudflare.com/
   - Click en **Pages** en el menú lateral
   - Click en **Create a project**

2. **Conectar GitHub:**
   - Click en **Connect to Git**
   - Autoriza Cloudflare en GitHub
   - Selecciona el repositorio `gatisaurios`

3. **Configurar Build:**
   - **Project name:** `gatisaurios` (o el que prefieras)
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (dejar vacío)

4. **Variables de Entorno:**
   - Click en **Environment variables**
   - Agregar:
     ```
     VITE_SUPABASE_URL = https://tu-proyecto.supabase.co
     VITE_SUPABASE_ANON_KEY = tu-anon-key-aqui
     ```

5. **Deploy:**
   - Click en **Save and Deploy**
   - Espera 2-3 minutos
   - ✅ Tu sitio estará en: `https://gatisaurios.pages.dev`

---

## 🔄 Actualizar el Sitio

Cada vez que hagas push a `main`, Cloudflare Pages automáticamente:
1. Detecta los cambios
2. Ejecuta el build
3. Despliega la nueva versión

```bash
# Hacer cambios en tu código
# ...

# Commit y push
git add .
git commit -m "Descripción de cambios"
git push origin main

# ✅ Cloudflare Pages desplegará automáticamente
```

---

## 🌐 Configurar Dominio Personalizado

1. En Cloudflare Pages, ve a tu proyecto
2. Click en **Custom domains**
3. Click en **Set up a custom domain**
4. Ingresa tu dominio (ej: `www.gatisaurios.com`)
5. Sigue las instrucciones para configurar DNS

---

## ✅ Verificación Post-Deploy

Después del deploy, verifica:

- [ ] ✅ El sitio carga en la URL de Cloudflare
- [ ] ✅ Las imágenes se ven correctamente
- [ ] ✅ Login con Google funciona
- [ ] ✅ La navegación funciona (React Router)
- [ ] ✅ Los estilos de Tailwind se aplican

---

## 🐛 Troubleshooting

### **Build falla en Cloudflare**
- Verifica que `package.json` tenga todas las dependencias
- Verifica que las variables de entorno estén configuradas
- Revisa los logs de build en Cloudflare

### **Imágenes no cargan**
- Verifica que las imágenes estén en `public/img/`
- Las rutas deben ser `/img/nombre.svg` (relativas a `public/`)

### **Login de Google no funciona**
- Agrega la URL de Cloudflare a los redirect URIs en Google Cloud Console:
  ```
  https://gatisaurios.pages.dev
  https://tu-proyecto.supabase.co/auth/v1/callback
  ```
- Actualiza también en Supabase Dashboard

### **React Router 404 en rutas**
- Cloudflare Pages automáticamente maneja SPAs
- Si hay problemas, crea `public/_redirects`:
  ```
  /*    /index.html   200
  ```

---

## 📊 Monitoreo

- **Analytics:** Cloudflare Pages incluye analytics gratis
- **Logs:** Ver en el dashboard de Cloudflare
- **Performance:** Cloudflare CDN optimiza automáticamente

---

## 🎯 Próximos Pasos

Después del deploy:

1. [ ] Configurar dominio personalizado
2. [ ] Configurar Google Analytics (opcional)
3. [ ] Configurar Sentry para error tracking (opcional)
4. [ ] Optimizar imágenes para web
5. [ ] Implementar caché strategies

---

¡Listo! Tu app está en producción 🎉
