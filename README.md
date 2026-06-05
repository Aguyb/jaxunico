# Jax Unico — La Plataforma Latina de Jacksonville

**Producida por Aguyb Studios** | [jaxunico.com](https://jaxunico.com)

Built with Next.js 14 + TypeScript + Tailwind CSS. Deployed on Vercel.

---

## 🚀 Deploy to Vercel (Step by Step)

### Step 1 — Push to GitHub

```bash
# In this folder:
git init
git add .
git commit -m "feat: initial Jax Unico platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jaxunico.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `jaxunico` repository
4. Framework: **Next.js** (auto-detected)
5. Click **"Deploy"**

Done. Vercel builds and deploys automatically on every push to `main`.

### Step 3 — Connect your domain (jaxunico.com)

1. In Vercel dashboard → Project → Settings → Domains
2. Add `jaxunico.com`
3. Update your DNS with the records Vercel provides
4. SSL is automatic

---

## 💻 Local Development

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## 📁 Project Structure

```
jaxunico/
├── app/
│   ├── page.tsx              # Home (Inicio)
│   ├── servicios/page.tsx    # Servicios — Aguyb Studios
│   ├── el-show/page.tsx      # El Show + Apply to be Guest
│   ├── directorio/page.tsx   # Directorio Latino
│   ├── eventos/page.tsx      # Eventos
│   ├── comunidad/page.tsx    # Comunidad + Membresías
│   ├── blog/page.tsx         # Blog
│   ├── anuncia/page.tsx      # Anuncia con Nosotros
│   ├── layout.tsx            # Root layout (Nav + Footer)
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation
│   ├── Footer.tsx            # Footer
│   └── Ticker.tsx            # Animated ticker
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## 🎨 Brand

| Token | Value |
|---|---|
| Primary Red | `#C6002B` |
| Dark Red | `#9B0020` |
| Gold | `#C9A84C` |
| Dark | `#1A1A1A` |
| Heading Font | Bebas Neue |
| Body Font | DM Sans |

---

© 2025 Aguyb Studios · Jacksonville, Florida
