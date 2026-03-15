# 🔍 Code Reviewer — AI-Powered Code Review Tool

An AI-powered web application that analyzes your code and provides intelligent, structured feedback in real time. Built with **React**, **Node.js**, and **Google Gemini AI**.

---

## 🚀 Live Demo

> _Coming soon — deploy link will be added here_

---

## 📸 Preview

![Code Reviewer App](./code-reviewer.png)

---

## ✨ Features

- 🤖 **AI Code Review** — Powered by Google Gemini, delivers instant feedback on code quality, bugs, and improvements
- 🎨 **Syntax Highlighting** — Real-time JavaScript syntax highlighting using PrismJS
- ✏️ **Live Code Editor** — Interactive editor built with `react-simple-code-editor`
- 📋 **Markdown Output** — AI responses rendered as clean, formatted Markdown
- 🌙 **Dark Theme UI** — Clean, developer-friendly dark interface

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React (Vite) | UI framework |
| PrismJS | Syntax highlighting |
| react-simple-code-editor | Code editor component |
| react-markdown | Render AI response as Markdown |
| Axios | HTTP requests to backend |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| Google Gemini AI (`@google/generative-ai`) | AI code analysis |
| CORS | Cross-origin request handling |
| dotenv | Environment variable management |

---

## 📁 Folder Structure

```
Code-Reviewer/
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js      # Handles incoming review requests
│   │   ├── routes/
│   │   │   └── ai.routes.js          # API route definitions
│   │   └── services/
│   │       └── ai.service.js         # Gemini AI integration logic
│   ├── .env                          # Environment variables (not committed)
│   ├── app.js                        # Express app setup
│   └── server.js                     # Server entry point
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx                   # Main React component
│   │   └── index.css                 # Global styles
│   ├── index.html
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Raj-roy27/Code-Reviewer.git
cd Code-Reviewer
```

---

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder:

```env
GOOGLE_GEMINI_KEY=your_gemini_api_key_here
```

Start the backend server:

```bash
npm start
```

> Server runs on `http://localhost:3000`

---

### 3. Setup Frontend

```bash
cd Frontend
npm install
npm run dev
```

> App runs on `http://localhost:5173`

---

## 🔌 API Reference

### `POST /ai/get-review`

Sends code to the AI and returns a review.

**Request Body:**
```json
{
  "code": "function sum() { return 1 + 1; }"
}
```

**Response:**
```json
"Your code looks good! Here are some suggestions to improve it..."
```

---

## 🚢 Deployment

| Service | Platform |
|---|---|
| Frontend | [Vercel](https://vercel.com) |
| Backend | [Railway](https://railway.app) |

Both platforms offer free tier hosting. After deploying the backend, update the API URL in `App.jsx` to point to your live backend URL.

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `GOOGLE_GEMINI_KEY` | Your Google Gemini API key |

> ⚠️ Never commit your `.env` file. It is already included in `.gitignore`.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 👨‍💻 Author

**Raj Roy**
- GitHub: [@Raj-roy27](https://github.com/Raj-roy27)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
