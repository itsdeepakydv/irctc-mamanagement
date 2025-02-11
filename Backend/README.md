# WorkIndia Project

## 📌 Overview

This is a React-based authentication system that includes login functionality, token-based authentication, and routing using React Router.

## 🚀 Features

- User login with authentication
- Token-based session management
- Protected routes for authenticated users
- React Router for navigation

## 🛠️ Tech Stack

- React.js
- React Router
- React Hooks
- Fetch API (for backend calls)

---

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-auth-app.git
   cd react-auth-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   ```

---

## 🔧 Configuration

### Backend API URL

Ensure your backend is running on `http://localhost:3000`. If needed, update API endpoints inside the `Login.js` file:

```js
fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(credentials)
})
```

---

## 🖥️ Usage

1. Open `http://localhost:3000` in your browser.
2. Enter valid credentials to log in.
3. Upon successful login, the app stores the token and redirects to a protected route.

---

## 🐞 Debugging Issues

### 1️⃣ White Screen (Blank Page)?

- Open Developer Tools (`F12` in Chrome) → Go to **Console** tab → Check for errors.
- Ensure all imports in `App.js`, `Login.js`, and other components are correct.
- Check that `react-router-dom` is installed:
  ```bash
  npm list react-router-dom
  ```
  If missing, install it:
  ```bash
  npm install react-router-dom
  ```

### 2️⃣ API Not Working?

- Ensure the backend is running (`http://localhost:3000`).
- Check Network tab (`F12` → Network) for failed requests.
- If using CORS, ensure the backend allows cross-origin requests.

### 3️⃣ React StrictMode Issues?

- Try removing `<React.StrictMode>` from `index.js`:
  ```jsx
  root.render(<App />);
  ```
- Restart the server:
  ```bash
  npm start
  ```

---

## 📜 License

This project is licensed under the MIT License.

---

## 📞 Contact

For any issues, feel free to create a GitHub issue or reach out at `your.email@example.com`.

