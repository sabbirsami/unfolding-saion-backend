# Unfolding-Saion Backend - Blogging Platform

### Description
The **Unfolding-Saion Backend** is a TypeScript-based blogging platform backend designed for users to create, update, and delete their blogs. The system includes secure authentication, role-based access control, and a public API for blog viewing with search, sort, and filter functionalities. It is built using **Node.js**, **Express**, and **MongoDB** (with **Mongoose**), and follows modern development practices.

---

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/) (Ensure it is running locally or remotely)

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sabbirsami/unfolding-saion-backend
   ```
2. **Navigate to the project directory:**
   ```bash
   cd unfolding-saion-backend
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

---

### Configuration

1. Create a `.env` file in the root directory and define the following environment variables:
   ```env
   PORT=5000
   NODE_ENV=<environment>
   BCRYPT_SALT_ROUNDS=<number>
   JWT_ACCESS_SECRET=<your-secret-key>
   DATABASE_URL=<your-mongodb-uri>
   JWT_REFRESH_SECRET=<your-secret-key>
   JWT_ACCESS_EXPIRES_IN=<expire-time>
   JWT_REFRESH_EXPIRES_IN=<expire-time>
   ```
   Replace `<your-mongodb-uri>` with your MongoDB connection URI and `<your-secret-key>` with a secure secret key.

---

### Scripts

- `npm run build`: Build the TypeScript code.
- `npm start`: Start the server (after building).
- `npm run start:dev`: Start the server in development mode with automatic restarts.
- `npm run lint`: Run ESLint to check code quality.
- `npm run lint:fix`: Fix linting issues automatically.
- `npm run format`: Format code using Prettier.
- `npm run type-check`: Check TypeScript types.
- `npm run generate-docs`: Generate Swagger API documentation.
- `npm run deploy-vercel`: Deploy the backend to Vercel.

---

### Usage

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Start the server:**
   ```bash
   npm run start:dev
   ```
3. Access the API at `http://localhost:5000` (or the port specified in `.env`).

---

### Features

#### User Roles
- **Admin:**
  - Can delete any blog.
  - Can block users.
  - Cannot update blogs.
- **User:**
  - Can register and log in.
  - Can create, update, and delete their own blogs.

#### Blog API
- Public API for viewing blogs with options for searching, sorting, and filtering.

#### Authentication & Authorization
- Secure user login with JWT.
- Role-based access control for Admin and User roles.

---

### Models

#### User Model
- **name**: string
- **email**: string
- **password**: string
- **role**: "admin" | "user" (default: "user")
- **isBlocked**: boolean (default: false)
- **createdAt**: Date
- **updatedAt**: Date

#### Blog Model
- **title**: string
- **content**: string
- **author**: ObjectId (User reference)
- **isPublished**: boolean (default: true)
- **createdAt**: Date
- **updatedAt**: Date

---

### API Endpoints

#### Doc
- **Swagger /api-docs**: Swagger Doc.

#### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login and receive a JWT.

#### Blog Management
- **POST /api/blogs**: Create a new blog (logged-in users only).
- **PATCH /api/blogs/:id**: Update a blog (only by the owner).
- **DELETE /api/blogs/:id**: Delete a blog (only by the owner).
- **GET /api/blogs**: Fetch all blogs with search, sort, and filter functionalities.

#### Admin Actions
- **PATCH /api/admin/users/:userId/block**: Block a user.
- **DELETE /api/admin/blogs/:id**: Delete any blog.

---

### Development Practices

#### Error Handling
Standardized error response:
```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400,
  "error": { "details": "Detailed error information" }
}
```
- Zod validation errors.
- Authentication and authorization errors.
- Resource not found errors.

#### Code Quality
- ESLint and Prettier for linting and formatting.
- Husky pre-commit hooks.

---

### Deployment

To deploy on Vercel:
```bash
npm run deploy-vercel
```
