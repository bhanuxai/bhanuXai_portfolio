# 🌌 Bhanu Sesha Sai — Interactive 3D Portfolio

Welcome to my portfolio! This is a state-of-the-art, premium portfolio website designed to showcase my engineering works, certifications, and technical arsenal. It features interactive 3D elements, physics simulations, dynamic animations, and responsive bento-grid layouts.

---

## 🚀 Live Demo
Access the live deployment here: **[bhanuxai-portfolio.vercel.app](https://bhanuXai-portfolio.vercel.app)** *(or check local server at http://localhost:5173/)*

---

## 🛠️ Tech Stack & Libraries

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Vite](https://img.shields.io/badge/Vite-B736FF?style=for-the-badge&logo=vite&logoColor=white)](#)
[![ThreeJS](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](#)

* **Core Structure:** React 19 + Vite 8
* **Styling & Theme:** TailwindCSS (curated Sleek Dark Theme)
* **3D & Physics Engines:** Three.js, `@react-three/fiber`, `@react-three/drei`, and `@react-three/rapier` (rigid-body collider physics)
* **Animations:** GSAP (GreenSock), `@gsap/react` for React scopes, and Framer Motion for responsive micro-interactions
* **Smooth Scrolling:** Lenis Scroll
* **Barcodes & QRs:** `jsbarcode` and `qr-code-styling`

---

## ✨ Key Features

### 🪪 1. 3D Interactive Lanyard ID Card
* **Interactive Physics:** Drag, swing, or flick the card using your mouse cursor. The card is suspended by a rope joint simulation using `@react-three/rapier` colliders.
* **Click-to-Spin:** Clicking the card triggers a smooth, spring-based elastic 3D spin rotation revealing the back face.
* **Dynamic Texture Mapping:** The card surface renders a custom `RenderTexture` displaying my credentials, barcode, and QR code (generated dynamically using simple-icons).
* **Self-Contained Canvas:** Features a transparent layout that blends perfectly with the background.

### 📜 2. Bento-Grid About & Bento Cards
* **3D Tilt Effect:** Cards respond to mouse cursor coordinates with smooth, spring-loaded 3D tilt angles.
* **Clean Sections:** Categorized details highlighting my journey in AI & Machine Learning, Full-Stack development, and open-source contributions.

### 🎓 3. Credentials & Scroll Stack
* **3D Scroll Stack:** Certifications from top institutions (Google, DeepLearning.AI, AWS, NVIDIA) are stacked in a 3D perspective scroll viewport.
* **Company Logos:** Individual cards showcase issuer-specific corporate branding logos dynamically.

### ⚡ 4. Fluid Animations
* **Character Stagger Name:** My name ("Bhanu Sesha Sai") is animated letter-by-letter on load using a custom React text-splitter (`SplitText`) integrated with GSAP ScrollTrigger.
* **Liquid Floating Island Navbar:** The header features a floating island Pill Navbar with GSAP morph-wave hover effect circles.
* **Background Shaders:** Background is overlaid with a subtle dark-veil noise shader and Aurora glowing blobs.

---

## 📂 Project Structure

```bash
├── public/
│   ├── font/                 # Custom card typography (.otf, .ttf)
│   ├── images/               # Card background templates, logos, and bands
│   ├── card.glb              # 3D clip and clamp metal meshes
│   └── resume.pdf            # Professional downloadable resume
├── src/
│   ├── assets/               # Local images and graphic resources
│   ├── components/
│   │   ├── Lanyard.jsx       # Wrapper for the 3D ID Card Experience
│   │   ├── PillNav.jsx       # Floating navbar component with GSAP liquid logic
│   │   ├── SplitText.jsx     # Custom character animation splitter
│   │   └── Aurora.jsx        # Smooth glowing background blobs
│   ├── idCard/
│   │   ├── components/
│   │   │   ├── Card.tsx      # Rapier rigid-body setup + drag translation
│   │   │   ├── CardTexture.tsx # Card face texture with text, barcode and QR
│   │   │   └── Experience.tsx # Fiber canvas container & environment lights
│   │   └── hook/
│   │       └── useBarcodeAndQRCode .ts # Dynamic Code128 and QR generator
│   ├── sections/
│   │   ├── Hero.jsx          # Welcome landing view
│   │   ├── About.jsx         # Bento information grid
│   │   ├── Skills.jsx        # Tickers & tech stack loop
│   │   └── Certifications.jsx # Certificate 3D scroll stack
│   ├── App.jsx               # Main site structure & Lenis initialization
│   └── main.jsx              # DOM root mount
```

---

## 💻 Running Locally

Follow these steps to set up the project on your machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/bhanuxai/bhanuXai_portfolio.git
   cd bhanuXai_portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open **[http://localhost:5173/](http://localhost:5173/)** in your browser to inspect.

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 🤝 Contact & Profiles
Feel free to reach out to me!
* **LinkedIn:** [@bhanu-sesha-sai-](https://www.linkedin.com/in/bhanu-sesha-sai-)
* **GitHub:** [@bhanuxai](https://github.com/bhanuxai)
* **LeetCode:** [@bss_bhanu](https://leetcode.com/u/bss_bhanu/)
