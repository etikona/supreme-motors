# 🚗 Premium Car Collection

A modern frontend web application built with **Next.js 13+ App Router**, showcasing a collection of premium car brands. The project demonstrates client-side data fetching, optimized image rendering, and responsive grid layouts.

## 📂 Project Structure

project-root/
├── public/
│ └── new_cars.json # Static JSON data for car brands
├── app/
│ └── car-grid/
│ └── page.tsx # Main grid layout displaying car brands
├── styles/ # TailwindCSS or other global styles
├── README.md
├── package.json
└── next.config.js

## ✨ Features

- ✅ Client-side rendering with hydration fix
- ✅ Responsive car brand grid layout
- ✅ Static JSON data used as API alternative
- ✅ Optimized image loading with Next.js `Image`
- ✅ Beautiful loading skeleton using TailwindCSS
- ✅ Routing to brand detail page via `Link`

## 📦 Technologies Used

- **Next.js 13+ (App Router)**
- **React**
- **TailwindCSS**
- **TypeScript (optional)**
- **Static JSON API from `public/`**

## 🛠 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/car-grid-app.git
   cd car-grid-app
   ```
