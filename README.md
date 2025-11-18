# 🎟️ Event Management System

A full-stack web application to **create, view, update, and delete (CRUD)** events.
Built using **Node.js, Express, MongoDB, Vanilla JavaScript, Vite, and Tailwind CSS** with a modern **dark glassmorphism UI**.

---

## 🚀 Features

### ✅ Event Features

* Create new events
* View all events
* Delete events
* Update events *(optional if implemented)*
* View event details

### 🎨 UI Features

* Built with **Tailwind CSS**
* Modern **dark glassmorphism design**
* Smooth animations
* Fully responsive layout

### 🧩 Technical Features

* RESTful API (Express.js)
* MongoDB via Mongoose
* Vite-powered frontend
* Modular file structure (MVC)
* Environment variable support

---

## 🛠️ Tech Stack

### **Frontend**

* Vanilla JavaScript (ES Modules)
* Vite
* Tailwind CSS
* Axios

### **Backend**

* Node.js
* Express.js
* Mongoose

### **Database**

* MongoDB Atlas (Cloud) / MongoDB Community

---

## 📂 Project Structure

```
event-management-system/
│
├── backend/
│   ├── server.js
│   ├── config/db.js
│   ├── controllers/eventController.js
│   ├── models/eventModel.js
│   ├── routes/eventRoutes.js
│   ├── middleware/errorMiddleware.js
│   └── .env
│
└── frontend/
    ├── index.html
    ├── .env
    ├── postcss.config.cjs
    ├── tailwind.config.cjs
    └── src/
        ├── index.js
        ├── api/eventApi.js
        ├── components/
        │     ├── Navbar.js
        │     ├── EventForm.js
        │     └── EventList.js
        ├── pages/
        │     ├── Home.js
        │     └── EventDetail.js
        ├── styles/style.css
        └── utils/dateHelper.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/event-management-system.git
cd event-management-system
```

---

# 🖥️ Backend Setup

### 2️⃣ Install backend dependencies

```bash
cd backend
npm install
```

### 3️⃣ Create `.env`

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ Start backend server

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

# 🎨 Frontend Setup

### 5️⃣ Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 6️⃣ Create frontend `.env`

```
VITE_API_URL=http://localhost:5000/events
```

### 7️⃣ Run Vite

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔁 API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/events`     | Fetch all events   |
| POST   | `/events`     | Create new event   |
| GET    | `/events/:id` | Get a single event |
| PUT    | `/events/:id` | Update event       |
| DELETE | `/events/:id` | Delete event       |

---

## 🚀 Future Enhancements

* Event editing popup/modal
* Calendar view integration
* User authentication
* Push/email notifications
* Search & filter events
* Export to PDF

---

## 📝 License

This project is open-source and available under the **MIT License**.

---

