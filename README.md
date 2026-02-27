# Ajinkya Patil — Portfolio

A modern, fully responsive portfolio website built with **React.js**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **EmailJS**.

---

## 📁 Folder Structure

```
src/
├── assets/
│   └── data.js              ← All static data (workProcess, portfolioList, skillCategories)
├── components/
│   ├── Navbar.jsx            ← Fixed nav with scroll + React Router links
│   ├── Ajinkya.jsx           ← Hero / Landing section
│   ├── About.jsx             ← About me section
│   ├── Services.jsx          ← Services offered
│   ├── Exp.jsx               ← Work experience / expertise cards
│   ├── Portfolio.jsx         ← Portfolio grid
│   ├── PortfolioItem.jsx     ← Single portfolio card with 3D tilt effect
│   ├── Contact.jsx           ← Contact teaser section (home page)
│   └── Footer.jsx            ← Footer with nav links & socials
├── pages/
│   ├── Home.jsx              ← Main home page (all sections stacked)
│   ├── SkillsPage.jsx        ← /skills route — animated skill bars
│   └── ContactPage.jsx       ← /contact route — full form with EmailJS
├── styles/
│   ├── Skills.css            ← Skills page styles
│   └── ContactPage.css       ← Contact page styles
├── App.jsx                   ← React Router setup
├── App.css
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 📧 Setting Up EmailJS (Contact Form)

The contact form at `/contact` uses **EmailJS** to send emails directly to your Gmail — no backend needed.

1. Create a free account at [https://emailjs.com](https://emailjs.com)
2. **Add Email Service**: Connect your Gmail → copy the **Service ID**
3. **Create Email Template**: Add these template variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — subject
   - `{{message}}` — message body
4. Copy the **Template ID**
5. Go to **Account > API Keys** → copy your **Public Key**
6. Open `src/pages/ContactPage.jsx` and replace:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

That's it — form submissions will land directly in your Gmail inbox. ✅

---

## 🛣️ Routes

| Route       | Description                        |
|-------------|------------------------------------|
| `/`         | Home — all portfolio sections      |
| `/skills`   | Skills page with animated progress |
| `/contact`  | Full contact form with EmailJS     |

---

## 🖼️ Images

Place your images in `/public/image/`:
- `ajinkya_iamge.png` — profile photo
- `4068675.jpg`, `img3.png`, `andriodimag.png` — project thumbnails

Place your CV in `/public/Pdf/Ajinkya_CV.pdf`

---

## 📦 Dependencies

| Package              | Purpose                  |
|----------------------|--------------------------|
| react-router-dom     | Client-side routing      |
| framer-motion        | Page animations          |
| @emailjs/browser     | Contact form email sends |
| tailwindcss v4       | Styling                  |
| remixicon (CDN)      | Icons                    |
