# Book Store Application

## Overview
The Book Store Application is a comprehensive platform that allows users to manage a collection of books. This application provides an intuitive and interactive user interface to add, delete, update, or view books in the database. Designed with user experience in mind, the application includes various views for exploring and managing books efficiently.

---

## Features
- **Add New Books**: Seamlessly add books with their details (e.g., title, author, genre, and publication date).
- **Update Book Details**: Modify existing book information with ease.
- **Delete Books**: Remove unwanted books from the collection.
- **View Book List**: Explore a well-organized list of all books in the database.
- **Responsive Design**: Enjoy a smooth and user-friendly interface across devices.

---

## Technologies Used
- **Frontend**:
  - React.js (JavaScript library for building user interfaces)
  - CSS/Bootstrap (for styling and layout)

- **Backend**:
  - Node.js (runtime environment)
  - Express.js (web application framework)

- **Database**:
  - MongoDB (for storing book data)

---

## Installation and Setup
Follow the steps below to run the application locally:

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running locally or on a cloud service)
- Git

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kailashnath39/book-store-application.git
   cd book-store-application
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set Up Configuration:

   - Open the `config.js` file in the `backend` directory.
   - Edit the following variables as needed:
     ```javascript
     module.exports = {
       PORT: 5000, // Server port
       MONGO_URI: '<your-mongodb-connection-string>', // MongoDB connection string
     };
     ```env
     port=5000
     mongo_url=<your-mongodb-connection-string>
     ```

5. **Start the Application**:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm run dev
     ```

6. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## Folder Structure
```
book-store-application/
├── frontend/      # Frontend code (React)
├── backend/       # Backend code (Node.js, Express)
├── README.md      # Documentation
```

---

Thank you for using the Book Store Application! Happy reading!

