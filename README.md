# 🚘 Car Import & Export Portal

A dynamic and responsive web application built for **car import and export businesses**, supporting both **new and used cars**. This project offers a premium, animated, and intuitive user experience designed to attract international buyers and dealers.

---

## 📌 Overview

This website showcases premium **new and used cars** for sale and export. Users can browse cars by brand, view high-quality images, and explore detailed listings in an elegant interface powered by animation and a modern design system.

The platform is built with the latest frontend technologies, focusing on performance, accessibility, and maintainability.

---

## 🌐 Live Preview

[🔗 Visit Live Site](https://your-live-site-link.com)  
_(Replace with your actual deployed link)_

---

## 🧰 Tech Stack

| Technology        | Description                                           |
| ----------------- | ----------------------------------------------------- |
| **Next.js 13+**   | App Router for page-based routing, optimized loading  |
| **Tailwind CSS**  | Utility-first styling for responsive design           |
| **ShadCN UI**     | Accessible and customizable components                |
| **Lucide-react**  | Beautiful, consistent icons                           |
| **JavaScript**    | Core language used for interaction logic              |
| **Framer Motion** | Simple yet powerful animations and transitions        |
| **GSAP**          | High-performance animations for scroll and UI effects |

---

## 📂 Folder Structure

/public/
└── new_cars.json # Static car data (brand_name, brand_image)
/app/
└── car-grid/
└── page.tsx # Grid view of car brands
└── brands/
└── [brand_name]/ # Dynamic route for individual car brand pages
/styles/
└── globals.css # Global Tailwind styles

yaml
Copy
Edit

---

## 🚀 Features

- 🔍 **New & Used Car Listings**  
  Browse both new and used cars with filters and categories.

- 🖼️ **Dynamic Brand Pages**  
  Each car brand has a dedicated page with brand-specific listings.

- 🌀 **Animations & Motion**  
  Uses Framer Motion and GSAP for smooth transitions and user engagement.

- 📱 **Responsive Design**  
  Optimized for desktop, tablet, and mobile screens.

- 🧑‍💻 **Modern UI/UX**  
  Built using ShadCN and Lucide-react for a clean, accessible design.

- ⚙️ **Hydration-Safe Client Side Rendering**  
  Avoids Next.js hydration issues with mounted check.

- 🔁 **Reusable Components**  
  Designed with scalability and reusability in mind.

---

## 🧪 Example JSON Data Format

```json
[
  {
    "brand_name": "BMW",
    "brand_image": "/images/bmw.png"
  },
  {
    "brand_name": "Toyota",
    "brand_image": "/images/toyota.png"
  }
]
🔧 This file should be placed in public/new_cars.json

🖥️ Setup & Development
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/car-portal.git
cd car-portal
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Start Local Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:3000/car-grid to view the app.

📦 Deployment
This app is easily deployable using Vercel, Netlify, or any Next.js compatible platform.

Ensure the JSON API (public/new_cars.json) is accessible and properly formatted for client-side fetch.

🛡️ Best Practices Followed
✅ Component-based architecture

✅ Animation safety (Framer Motion + GSAP combination)

✅ SSR hydration-safe with mounted flag

✅ Mobile-first responsive layout

✅ Error handling for fetch calls

🧠 Learnings & Goals
Creating scalable frontend UIs for businesses

Integrating animation libraries in Next.js

Designing accessible, responsive, and performance-optimized apps

Organizing frontend architecture for extensibility

📄 License
Licensed under the MIT License.

🤝 Acknowledgements
Next.js Documentation

Tailwind CSS

ShadCN UI

Lucide React

Framer Motion

GSAP
```
