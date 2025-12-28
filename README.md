# 🚀 CodeCrackles

**CodeCrackles** is a front-end–focused MVP project built to practice and showcase modern web development fundamentals — authentication flow, user profiles, dashboards, and interactive quizzes — using **HTML, CSS, and Vanilla JavaScript**.

This project is part of my continuous learning journey and portfolio.

---

## 🧭 Project Overview

CodeCrackles currently provides:

- User authentication (signup & login)
- Persistent user profiles
- Dashboard with profile summary
- Interactive quiz module (50 questions)
- Score tracking per user
- Global dropdown navigation
- User disclaimer for safe demo testing

> ⚠️ **Important:** This is a demo / MVP project.  
> Do **not** use real emails or passwords. Use dummy credentials only.

---

## ✨ Current Features

### 🔐 Authentication

- Signup & login flow using browser `localStorage`
- Session-based login state
- Logout functionality
- Demo disclaimer to inform users of storage limitations

### 👤 User Profile

- Bio (textarea)
- Tech stack selection
- Skill level
- Interests
- Profile picture upload
- Persistent profile data (stored per user)

### 📊 Dashboard

- Welcome message
- Profile summary
- Display of selected tech stacks
- Quiz record summary
- Last quiz score with date

### 🧠 Quiz Module

- 50-question quiz
- Question navigation (Previous / Next)
- Progress indicator
- Score calculation
- Quiz result saved to user dashboard

---

## 🔐 Security Note (MVP Scope)

All user data is stored in **browser localStorage** for simplicity.

This approach is:

- ✅ Suitable for demos and learning
- ❌ Not secure for production use

Users are advised to:

- Use **dummy emails and passwords**
- Treat the project as an **idea / MVP / demo**

Future versions will introduce backend authentication and secure storage.

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage (temporary persistence)

---

## 📁 Project Structure (Simplified)

```txt
codecrackles/
│
├── index.html        # Login page
├── register.html     # Signup page
├── dashboard.html    # User dashboard
├── profile.html      # Profile management
├── quiz.html         # Quiz interface
├── styles.css        # Global styles
├── auth-local.js     # Authentication logic
├── profile.js        # Profile logic
├── quiz.js           # Quiz logic
├── quiz-data.js      # Quiz questions
└── images/           # Assets

🚀 More Features Coming Soon

Blog section

Courses module

Interview preparation tools

Enhanced quiz categories

Community interaction

Secure backend authentication

## 📘 Project Learnings

This project was built as a hands-on learning experience.
Key technical and design lessons gained during development are documented here:

👉 [Read what I learned building CodeCrackles](./LEARNINGS.md)

👤 Author

Nwaohangwa Chinanu Godwin
GitHub: https://github.com/chinanugod

© 2025 CodeCrackles. All rights reserved.
CodeCrackles is an evolving project focused on learning, UX flow, and interactive development.
```
