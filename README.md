# MiniShop - Full Stack Web Application

A small full-stack e-commerce management application developed as a portfolio project to demonstrate my experience with backend API development, React frontend development, authentication, database integration, and CRUD operations.

## Project Overview

MiniShop is a simple product management system consisting of:

- ASP.NET Core REST API backend
- React + TypeScript frontend
- SQL Server database
- JWT-based authentication
- Role-based authorization
- Product CRUD operations

The project demonstrates how a modern frontend communicates with a backend REST API and how authentication and authorization are handled across both layers.

---

## Technologies

### Backend

- C#
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT Authentication
- REST API
- Swagger / OpenAPI
- Dependency Injection
- DTOs
- Service Layer Architecture

### Frontend

- React
- TypeScript
- Vite
- JavaScript
- HTML / CSS
- REST API integration
- JWT authentication

---

## Architecture

```text
┌──────────────────────────────┐
│       React Frontend         │
│      React + TypeScript      │
│                              │
│  Components                  │
│  Services                    │
│  State Management            │
└──────────────┬───────────────┘
               │
               │ HTTP / JSON
               │
               ▼
┌──────────────────────────────┐
│       ASP.NET Core API       │
│                              │
│ Controllers                  │
│ Services                     │
│ DTOs                         │
│ JWT Authentication           │
│ Role Authorization           │
└──────────────┬───────────────┘
               │
               │ Entity Framework Core
               ▼
┌──────────────────────────────┐
│          SQL Server          │
│                              │
│ Users                        │
│ Products                     │
│ Other application data       │
└──────────────────────────────┘
```
## Key Features
### Authentication
- User login using email and password
- JWT token generation
- JWT token sent with authenticated API requests
- Logout functionality
- Authentication state handling in React
- Authorization
- The application supports role-based authorization.

### Admin
- Create products
- Edit products
- Delete products
- View products

### Customer
- View products
- Cannot access administrative product operations
- Authorization is enforced on the backend rather than relying only on frontend UI restrictions.

### Product Management

The application provides CRUD operations for products:
- Create product
- Retrieve products
- Update product
- Delete product
- View product details
- Manage stock quantity
- Activate/deactivate products

## API Endpoints
### Authentication
POST /api/auth/login

Authenticates a user and returns a JWT token.

### Products
GET    /api/products
POST   /api/products
GET    /api/products/{id}
PUT    /api/products/{id}
DELETE /api/products/{id}

Administrative endpoints require an authenticated user with the appropriate role.


## Project Structure

MiniShop/
│
├── MiniShop.Api/
│   │
│   ├── Controllers/
│   ├── Data/
│   ├── DTOs/
│   ├── Models/
│   ├── Services/
│   ├── Program.cs
│   └── appsettings.json
│
├── minishop-client/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.ts
│
├── MiniShop.sln
├── .gitignore
└── README.md


## Running the Backend
### Requirements
- .NET SDK
- SQL Server
- Visual Studio or another .NET development environment

### Database
Configure the SQL Server connection string using local configuration or environment variables.
Do not commit database passwords or other sensitive credentials to the repository.
Run the database migrations:
  dotnet ef database update
Start the API:
  dotnet run
Swagger can be used to test the API endpoints.


## Running the Frontend
###Requirements
- Node.js
- npm

Navigate to the React project:
  cd minishop-client

Install dependencies:
  npm install

Start the development server:
  npm run dev

The application will normally be available at:
http://localhost:5173
Make sure the ASP.NET Core API is running before using the frontend.

Authentication Flow
User
 │
 │ Login
 ▼
React Frontend
 │
 │ POST /api/auth/login
 ▼
ASP.NET Core API
 │
 │ Validate credentials
 ▼
SQL Server
 │
 │
 ▼
JWT Token
 │
 ▼
React
 │
 │ Authorization: Bearer <token>
 ▼
Protected API

## What This Project Demonstrates

This project was created to demonstrate practical full-stack development skills, including:

- Designing and developing REST APIs
- Developing backend services using C# and ASP.NET Core
- Working with SQL Server and Entity Framework Core
- Implementing authentication and authorization
- Building a React application using TypeScript
- Connecting a React frontend to a REST API
- Implementing CRUD functionality
- Structuring frontend components and service layers
- Handling API errors and authentication failures
- Using Git and GitHub for source control

## Disclaimer
This is a portfolio/demo project created for demonstrating software development skills.
It is not intended for production use and may omit some production-level security and infrastructure considerations.
