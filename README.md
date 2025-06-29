
# 🍽️ Foodie Studio - Food Shop Edition

Welcome to the **Food Shop Edition** of the Wibe Studio project — a modern, visually engaging React landing page originally built by [Naavo-Co](https://github.com/Naavo-Co). This fork customizes the original template for food-related businesses such as grocery stores, restaurants, and markets.

## 🚀 Features

- 🛒 Clean UI focused on food retail or restaurant brands
- 🎞️ Hero section updated with a **food shop walkthrough video**
- ✨ Smooth animations using `Framer Motion`
- ⚡ Fully responsive and fast performance
- 💡 Easy to customize for your own food shop or startup

## 📸 Demo

Check out the live version here: [Your Live Link](https://your-live-demo-url.com)

## 🧰 Tech Stack

- **React.js**
- **Styled Components**
- **Framer Motion**
- **React Router**

## 📂 Project Structure

```
src/
├── assets/
│   └── food-shop-walk.mp4       # 🍴 New hero background video
├── components/
│   └── HeroSection.js           # 🖼️ Displays updated hero section
├── sections/
├── styles/
└── App.js
```

## 🛠️ Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/Naavo-Co/Foodie-Studio
cd food-shop-wibe
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
npm start
```

4. **Visit**

Open [http://localhost:3000](http://localhost:3000) to see it in action.

## 📝 Customization Notes

- **Video Update:**  
  The hero video was replaced in `HeroSection.js`:

  ```js
  import video from "../assets/food-shop-walk.mp4";
  ```

- **Assets Folder:**  
  Make sure the new video is placed inside `src/assets`.

## 📦 Deployment

Use [Vercel](https://vercel.com/), [Netlify](https://netlify.com), or any static hosting service to deploy your React app easily.


## 📄 License

MIT License
