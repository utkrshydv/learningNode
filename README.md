
# 📚 Node.js REST API Projects

This repository contains a series of RESTful APIs built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
Each project demonstrates practical backend development concepts including routing, dynamic parameters, JSON operations, and deployment.

---

## 🏨 Project 1 → Hotels API

A REST API for managing hotel staff and menu items.

### 🛠️ Technologies Used
- Node.js
- Express
- MongoDB (Mongoose)

### 💡 What I Learned
- Structuring REST APIs using Express.js.
- Querying MongoDB using Mongoose.
- Designing flexible API endpoints using route parameters.

### 📚 API Endpoints

#### 👥 `/person`
- `POST /person` — Add a new staff member.
- `GET /person` — Retrieve all staff members.
- `GET /person/:workType` — Retrieve staff by role (`chef`, `waiter`, `manager`).

#### 🍽️ `/menu`
- `POST /menu` — Add a new menu item.
- `GET /menu` — Retrieve all menu items.
- `GET /menu/:tasteType` — Retrieve items by taste (`sweet`, `spicy`, `sour`).

---

## ⚽ Project 2 → FavPlayer API

A REST API to manage football player data.

### 🛠️ Technologies Used
- Node.js
- Express
- MongoDB (Mongoose)

### 💡 What I Learned
- Creating dynamic API endpoints using route parameters.
- Modeling sports data in MongoDB collections.
- Applying REST principles to a real-world domain.

### 📚 API Endpoints

#### 🧍 `/player`
- `POST /player` — Add a new football player.
- `GET /player` — Retrieve all players.
- `GET /player/:pos` — Retrieve players by position (`gk`, `cb`, `lb`, `rb`, `cm`, `dm`, `am`, `lwf`, `rwf`, `cf`).

---

## 📘 Project 3 → Book Library API

A RESTful API for managing a book library.

### 🚀 Live Demo
🔗 [https://utkrshydv-libraryapi.onrender.com](https://utkrshydv-libraryapi.onrender.com)

> ⚠️ **Note:** Hosted on Render's free tier — may experience delays or slow response times after inactivity.

### 🛠️ Technologies Used
- Node.js
- Express
- MongoDB (Mongoose)

### 💡 What I Learned
- Building a full REST API using Express and MongoDB.
- Organizing routes in separate files for clean code.
- Handling async DB connections with Mongoose.
- Deploying to Render and understanding cold start delays.
- Writing user-friendly documentation and sample routes.
- Using environment variables for config and security.

### 📋 Features
- Fetch all books
- Search by ISBN, genre, rating, or partial title
- Add, update, or delete books by ISBN

### 🛣️ API Endpoints

#### 📖 GET Requests

| Route                   | Description                     |
|------------------------|---------------------------------|
| `/book`                | Fetch all books                 |
| `/book/isbn/:isbn`     | Fetch a book by ISBN            |
| `/book/genre/:genre`   | Fetch books by genre            |
| `/book/rating/:rating` | Fetch books with rating ≥ value |
| `/book/search/:search` | Search books by partial title   |

#### ➕ POST `/book`

**Add a new book:**

```json
{
  "name": "Harry Potter",
  "author": "J.K. Rowling",
  "publishedYear": 1997,
  "genres": ["fantasy"],
  "isbn": "9780747532743",
  "rating": 5
}
````

#### ✏️ PUT `/book/isbn/:isbn`

Update an existing book by ISBN. Send only the fields you want to update.

#### ❌ DELETE `/book/isbn/:isbn`

Delete a book by its ISBN.

### 📝 Notes

* All request bodies must be in JSON.
* Valid genres include: funny, fiction, non-fiction, mystery, fantasy, romance, sci-fi, biography, history, thriller, self-help.
* Ratings must be between 0 and 5.

---


## 🗳️ Project 4 → Voting App API

A backend voting system where registered users (voters) can log in and vote for candidates. Admins can manage candidates. Built using Express, MongoDB, and JWT for secure authentication.

### 🛠️ Technologies Used

* Node.js
* Express
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* bcrypt (for password hashing)

### 🗂️ Project Structure

```bash
04-fourth-voting/
├── db.js                  # MongoDB connection
├── jwt.js                 # JWT utility functions
├── models/
│   ├── candidate.js       # Candidate schema
│   └── user.js            # User schema with password hashing
├── routes/
│   ├── userRoutes.js      # Login and registration
│   └── candidateRoutes.js # Candidate actions and voting logic
└── server.js              # Main entry point (Express app + routes)
```

### 🔐 Features

* **User Roles**: `voter` and `admin`
* **Authentication**: Signup/login with hashed passwords
* **Authorization**: JWT-protected routes
* **Voting**: Voters can vote once; vote count is stored
* **Admin Tools**: Add/edit/delete candidates

### 🧠 What I Learned

* Building token-based auth flows using JWT
* Designing normalized MongoDB schemas using Mongoose
* Password hashing and comparison using `bcrypt`
* Managing protected routes and user roles
* Structuring Express apps for scale

---



## 🧩 Practice Problems

A collection of JavaScript practice problems and small utilities.

### 🛠️ Technologies Used

* Node.js
* JavaScript

### 💡 What I Learned

* Strengthened JavaScript fundamentals.
* Practiced common programming patterns.
* Used Node.js built-in modules (`fs`, `os`).
* Worked with JSON read/write operations.

### 📝 Contents

Includes problems and code snippets on:

* Arithmetic operations
* Object and array manipulation
* Functions and callbacks
* File system and OS modules
* JSON read/write logic

---

