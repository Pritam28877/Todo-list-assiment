
# MERN TodoList

This repository contains a TodoList web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to manage their tasks effectively.

## Features

- **Create**: Add new tasks to the list.
- **Read**: View the list of tasks with their details.
- **Update**: Edit or mark tasks as completed.
- **Delete**: Remove tasks from the list.

## Installation

1. Clone this repository: `git clone <repository_url>`
2. Navigate to the `mern-todolist` directory: `cd Todo-list-assiment`

### Backend (Node.js & Express)

1. Navigate to the `backend` directory: `cd backend`
2. Install backend dependencies: `npm install`
3. Set up environment variables: Create a `.env` file based on `.env.example`.
4. Start the server: `npm start` or `npm run dev` for development using Nodemon.

### Frontend (React)

1. Navigate to the `frontend` directory: `cd frontend`
2. Install frontend dependencies: `npm install`
3. Start the frontend: `npm run dev`

## Usage

- **Backend**: The server runs on `http://localhost:8000`.
- **Frontend**: The React app runs on `http://localhost:5173`.

## Technology Stack

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Cors
- Dotenv

### Frontend
- React
- React Router
- css

## Folder Structure

### Backend
```
/backend
  |-- /config
  |-- /controllers
  |-- /models
  |-- /routes
  |-- server.js
  |-- .env.example
```

### Frontend
```
/frontend
  |-- /public
  |-- /src
      |-- /components
      |-- /pages
      |-- App.js
      |-- index.js
  |-- package.json
```

## License

This project is licensed under the MIT License.

## Acknowledgements

- Any acknowledgements or credits for libraries, tutorials, or resources used in the project.

## Contributors

- List of contributors if there are multiple people working on the project.

---

This is a basic template for a MERN TodoList README. Feel free to customize it with more details, features, or acknowledgments specific to your project.
