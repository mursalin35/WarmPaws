# 🐾 WarmPaws – Winter Pet Care Companion

WarmPaws is a modern, cozy, and user-friendly platform designed to keep your pets **safe, warm, and healthy during the winter season**.  
The application provides **winter care services**, **grooming**, **pet accessories**, **expert vet support**, **authentication**, and **winter care tips** — all integrated in a smooth UI/UX.

---

## 📸 Screenshot  
> *(Replace the image URL with your own screenshot)*  
![WarmPaws Screenshot](https://i.ibb.co.com/mC3dFBNs/WarmPaws.png)

---

## 🌐 Live Demo

🔗 **Live Website:** https://pet-care-26f18.web.app/  

---

## 📌 Features

### 🔐 Authentication  
- Firebase Email/Password login  
- Google Sign-In  
- Password Reset  
- Protected Routes (PrivateRoute)

### 🐶 Pet Services  
- Dynamic services from JSON  
- Service detail page  
- Booking form with toast alerts  

### 👨‍⚕️ Meet Our Vets  
- Expert vet list  
- Rating UI  

### 🎁 Winter Accessories  
- Cozy winter items  
- AOS animation effects  

### 💡 Winter Care Tips  
- Useful tips for pet safety  

### 🧑‍💼 User Profile  
- Update name & photo  
- Modal-based editing  
- Real-time UI updates  

### 🎨 UI/UX  
- Fully responsive  
- Tailwind + DaisyUI  
- Swiper Slider  
- React Spring animations  

---

## 🛠️ Technologies Used

### **Frontend**
- React.js  
- React Router DOM  
- Tailwind CSS  
- DaisyUI  
- Swiper.js  
- AOS  
- React Icons  
- React Spring  

### **Backend / Auth**
- Firebase Authentication  
- Firebase Hosting  

---

## 📦 Dependencies

```
"react-router-dom"
"firebase"
"react-hot-toast"
"swiper"
"react-icons"
"@react-spring/web"
"aos"
"tailwindcss"
"daisyui"
```

---

## 📁 Project Structure

```
WarmPaws/
│── src/
│   ├── components/
│   ├── page/
│   ├── provider/
│   ├── router/
│   ├── mainLayout/
│   ├── Layout/
│   ├── firebase/
│   └── main.jsx
│
└── public/
    ├── service.json
    ├── vets.json
    ├── tips.json
    └── accessories.json
```

---

## 🚀 Run Locally

### 1️⃣ Clone the repo  
```bash
git clone <repo-url>
cd WarmPaws
```

### 2️⃣ Install packages  
```bash
npm install
```

### 3️⃣ Firebase Setup  
Create: `/src/firebase/firebase.config.js`

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export default app;
```

### 4️⃣ Start dev server  
```bash
npm run dev
```

### 5️⃣ Open browser  
```
http://localhost:5173
```

---

## 👨‍💻 Developer

**M.S Mursalin**  
Full-Stack Web Developer  
🔥 Passionate about React, Firebase & Modern UI/UX  

---
