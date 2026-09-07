# GENKIT

> Creative digital solutions for modern businesses.

Genkit is a modern digital services website built to showcase and provide professional **Web Development, Video Editing, and Graphic Design** services.

The project is built with React and Vite, with a focus on responsive design, smooth user experience, SEO, performance, and clean project structure.

---

## ✨ Features

- Responsive design for desktop, tablet, and mobile
- Modern and clean user interface
- Web Development service showcase
- Video Editing service showcase
- Graphic Design service showcase
- About Us page
- Contact page
- FAQ section
- Reusable navigation and footer components
- Smooth scroll and animation effects
- Mobile-specific responsive behavior
- SEO-friendly page metadata
- Canonical URLs
- Open Graph metadata
- Twitter Card metadata
- Custom favicon
- Open Graph social sharing image
- `robots.txt`
- `sitemap.xml`
- React Router based navigation
- Production-ready Vite build
- Vercel deployment configuration
- Optimized static assets

---

## 🚀 Services

### Web Development

Professional websites and digital experiences designed around business requirements, usability, responsiveness, and performance.

### Video Editing

Creative video editing solutions for promotional content, social media, branding, and digital marketing.

### Graphic Design

Visual design solutions including branding, digital graphics, creative assets, and marketing materials.

---

## 📄 Website Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Introduction to Genkit and its services |
| About Us | `/about-us` | Genkit story, team, and vision |
| Services | `/service` | Web development, video editing, and graphic design |
| Contact | `/contact` | Contact information and project enquiries |
| 404 | `*` | Handles unavailable routes |

---

## 🛠️ Tech Stack

### Frontend

- React
- React DOM
- React Router
- React Helmet Async
- JavaScript (ES Modules)
- HTML5
- CSS3

### Build Tools

- Vite
- ESLint
- Vite React Plugin

### Deployment

- Vercel

### Assets

- WebP
- JPG
- SVG
- Custom favicon
- Open Graph image

---

## 📁 Project Structure

```text
Genkit-website/
│
├── public/
│   ├── favicon.webp
│   ├── og-image.webp
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── NavBar.jsx
│   │   └── Footer.jsx
│   │
│   ├── hooks/
│   │   ├── useIsMobile.js
│   │   ├── useSlideUp.js
│   │   └── useScrollClone.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── AboutUs.jsx
│   │   ├── about.css
│   │   ├── Service.jsx
│   │   ├── service.css
│   │   ├── Contact.jsx
│   │   ├── contact.css
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md