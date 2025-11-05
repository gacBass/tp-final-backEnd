# 🏥 Medical Management System API

A **secure and scalable** RESTful API built with Node.js to manage doctors, departments, and user authentication for a medical system.

> This project was developed as a comprehensive backend system for a university course project, focusing on **CRUD** (Create, Read, Update, Delete) operations and secure user management.

-----

## ✨ Features at a Glance

  * **User Management**: Seamless **registration and login** using secure **JWT** (JSON Web Tokens).
  * **Doctor Management**: Full **CRUD** functionality for maintaining doctor records.
  * **Department Management**: **CRUD** operations to manage various medical departments.
  * **Robust Security**: Implements **bcrypt** for password hashing and **token-based authentication**.
  * **Frontend Ready**: Configured with **CORS** support for easy integration with any client-side application.

-----

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Runtime** | **Node.js** | Backend JavaScript runtime environment. |
| **Framework** | **Express.js** | Minimalist and flexible web application framework. |
| **Database** | **MongoDB** | NoSQL database for flexible data modeling. |
| **ORM/ODM** | **Mongoose** | Object Data Modeling (ODM) library for MongoDB. |
| **Authentication** | **JWT / bcrypt** | Token-based security and robust password hashing. |
| **Deployment** | **Vercel** | Serverless deployment platform. |

-----

## 🚀 Getting Started

Follow these steps to set up and run the API locally.

### 📋 Prerequisites

Ensure you have the following installed:

  * **Node.js** (v14 or higher is recommended)
  * A running **MongoDB** instance (local or cloud-hosted)
  * **npm** or **yarn** package manager

### 🔧 Installation Steps

1.  **Clone the Repository** and navigate to the project directory:

    ```bash
    git clone <your-repo-url>
    cd <your folder>
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    # or yarn install
    ```

3.  **Configure Environment Variables**:
    Create a file named **`.env`** in the root directory and add your configurations:

    ```env
    # Database Connection
    MONGODB_URI=your_mongodb_connection_string
    DATABASE_NAME=your_database_name

    # Server Configuration
    PORT=3000

    # Security Keys
    SECRET=your_super_secret_jwt_key
    ```

4.  **Start the Server**:
    Run the development server, which typically includes hot-reloading:

    ```bash
    npm run dev
    ```

    The API should now be running at `http://localhost:3000`.

-----

## 📡 API Endpoints Documentation

All endpoints are prefixed with `/api`. Authentication endpoints are generally **public**, while **User**, **Doctor**, and **Department** CRUD operations require a valid **JWT token** to be passed in the `Authorization: Bearer <token>` header.

### 🔑 Authentication

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/login` | Authenticates a user and returns a JWT token. |
| `POST` | `/api/user` | Register a new user (admin/initial user). |

### 👨‍⚕️ Doctors Management (Requires Auth)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/doctor` | Retrieve a list of all doctors. |
| `POST` | `/api/doctor` | Create a new doctor record. |
| `PUT` | `/api/doctor/:id` | Update an existing doctor's details. |
| `DELETE` | `/api/doctor/:id` | Remove a doctor record by ID. |

### 🏢 Departments Management (Requires Auth)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/department` | Retrieve a list of all departments. |
| `POST` | `/api/department` | Create a new medical department. |
| `PUT` | `/api/department/:id` | Update an existing department's details. |
| `DELETE` | `/api/department/:id` | Remove a department by ID. |

-----

## 🏗️ Project Architecture

The API follows a clear and maintainable **Model-View-Controller (MVC)**-like structure, organizing the code for separation of concerns and scalability.

```
.
├── api/
│   └── index.js             # Vercel entry point / main server initializer
├── src/
│   ├── controllers/         # ⬅️ Request handlers; link routes to services
│   ├── models/              # ⬅️ Mongoose Schemas (User, Doctor, Department)
│   ├── routes/              # ⬅️ API route definitions (e.g., /api/doctor)
│   ├── services/            # ⬅️ Core Business Logic (Best Practice: handles data operations)
│   ├── middlewares/         # ⬅️ Custom logic like authentication (verifyToken)
│   └── utils/               # ⬅️ Helper functions (validators, token generation)
├── config.js                # Environment-dependent configuration
├── db.js                    # Database connection setup
├── package.json
└── vercel.json              # Configuration for serverless deployment
```

-----

## 👨‍🎓 About This Project

This project was a capstone assignment for the **Backend Development** course at **UTN (Universidad Tecnológica Nacional)**. It serves as a practical demonstration of several key concepts:

  * **RESTful API Design** principles.
  * Implementation of the **MVC architecture** pattern.
  * Secure **Authentication and Authorization** flows.
  * Database interaction using **MongoDB and Mongoose**.
  * **Error Handling** and **Input Validation**.

-----

## 📝 License

This project is intended for **educational purposes** only. Feel free to fork and adapt it for your own learning\!

> **Note**: As a university project, this API is an excellent learning resource but should be thoroughly reviewed and optimized before being considered for a production environment.

-----

Would you like me to help you draft example requests (e.g., using `curl` or a JSON payload) for the main endpoints, like user login or creating a new doctor?
