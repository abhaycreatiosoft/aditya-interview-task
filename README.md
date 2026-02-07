# Express.js API Development Assignment

## Overview
Build a **Task Management API** with user authentication and CRUD operations. This project tests core Express.js skills, RESTful design, error handling, and basic security practices.

## Time Allocation
**Duration:** 90 minutes

## Requirements

### Tech Stack
- Node.js with Express.js
- Any database (MongoDB/PostgreSQL/SQLite - candidate's choice)
- JWT for authentication
- Git for version control

### Core Features

#### 1. User Authentication
- `POST /api/auth/register` - Register new user (email, password, name)
- `POST /api/auth/login` - Login and receive JWT token
- Password hashing required

#### 2. Task Management (Protected Routes)
- `GET /api/tasks` - Get all tasks for logged-in user (with pagination)
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

#### 3. Task Model
```javascript
{
  title: String (required),
  description: String,
  status: Enum ['pending', 'in-progress', 'completed'],
  priority: Enum ['low', 'medium', 'high'],
  dueDate: Date,
  userId: Reference to User,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Must-Have Features
- ✅ Environment variables (`.env` file)
- ✅ Input validation (email format, required fields)
- ✅ Error handling middleware
- ✅ JWT authentication middleware
- ✅ Proper HTTP status codes
- ✅ Basic logging (console or file)
- ✅ README with setup instructions

### Bonus Points (Optional)
- Task filtering by status/priority
- Search tasks by title
- API documentation (Swagger/Postman collection)
- Unit tests for at least 2 endpoints
- Rate limiting
- CORS configuration

## Evaluation Criteria

| Criteria | Weight | What to Look For |
|----------|--------|------------------|
| **Code Structure** | 25% | Clean folder organization, separation of concerns (routes/controllers/models) |
| **Functionality** | 30% | All core features working, proper authentication flow |
| **Error Handling** | 15% | Graceful error responses, validation errors, auth errors |
| **Security** | 15% | Password hashing, JWT implementation, input sanitization |
| **Code Quality** | 15% | Readable code, consistent naming, proper async/await usage |

## Setup Instructions for Candidate

**What you'll deliver:**
1. GitHub repository URL
2. Working API with all endpoints functional
3. README with:
   - Installation steps
   - Environment variables needed
   - API endpoint documentation
   - Sample requests/responses

---

**Interview Flow Suggestion:**
1. **First 15 min:** Project setup, database connection, basic server
2. **Next 20 min:** Authentication system (register/login)
3. **Next 40 min:** Task CRUD operations
4. **Last 15 min:** Testing, documentation, push to GitHub

