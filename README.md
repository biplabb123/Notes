# 📘 College Notes Sharing App

This is a simple Notes Sharing App built for college students to upload and access educational resources like PDFs and images. Built with HTML, CSS, JavaScript, and Firebase.

---

## 🚀 Live Demo

You can view the live app hosted via GitHub Pages:

👉 [https://biplabb123.github.io/notes/](https://biplabb123.github.io/notes/)

(Replace `your-username` with your actual GitHub username)

---

## 🔧 Features

- Upload notes (PDFs/images)
- Browse and download notes by subject
- Real-time storage with Firebase
- Clean and responsive UI

---

## 📁 Project Structure

```
college-notes-app/
│
├── index.html      # Main app page
├── style.css       # Styling
├── app.js          # Firebase upload & download logic
└── README.md       # Project documentation
```

---

## 🛠️ Setup Instructions

### 1. Clone This Repository

```bash
git clone https://github.com/biplabb123/notes.git
cd notes
```

### 2. Configure Firebase

Create a Firebase project at [firebase.google.com](https://firebase.google.com) and replace the config in `app.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR.firebaseapp.com",
  projectId: "YOUR",
  storageBucket: "YOUR.appspot.com",
  messagingSenderId: "XXX",
  appId: "APP-ID"
};
```

Enable:
- Firestore Database
- Firebase Storage

---

### 3. Deploy to GitHub Pages

1. Push your project to GitHub.
2. Go to **Settings → Pages**
3. Under “Source”, select:
   ```
   Branch: main
   Folder: /root
   ```
4. Save → Get your public site link!

---

## 📜 License

Free to use, modify, and share for educational purposes.

---

**Made with ❤️ for students**
