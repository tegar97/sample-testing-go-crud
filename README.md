# Simple CRUD Application with Go Fiber & MySQL

A simple CRUD (Create, Read, Update, Delete) application built with Go Fiber framework, GORM ORM, and MySQL database with a responsive Bootstrap UI.

## Features

- ✅ Create new users
- ✅ Read/Display all users
- ✅ Update existing users
- ✅ Delete users
- ✅ Responsive Bootstrap UI
- ✅ MySQL database with GORM
- ✅ Auto migration
- ✅ Modern UI with Font Awesome icons

## Prerequisites

Before running this application, make sure you have:

- Go 1.21+ installed
- MySQL server running
- Git (optional)

## Setup Instructions

### Option 1: Docker (Recommended)

1. **Clone the project:**
   ```bash
   git clone <your-repo-url>
   cd example-crud-go-sample
   ```

2. **Run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   Open your browser and go to: `http://localhost:8002`

### Option 2: Local Development

1. **Clone or create the project:**
   ```bash
   git clone <your-repo-url>
   cd example-crud-go-sample
   ```

2. **Install dependencies:**
   ```bash
   go mod tidy
   ```

3. **Setup environment configuration:**
   - Copy the example environment file:
     ```bash
     cp config.env.example config.env
     ```
   - Edit `config.env` with your database credentials:
     ```env
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_USER=root
     DB_PASSWORD=your_mysql_password
     DB_NAME=crud_db
     APP_PORT=8002
     ```

4. **Setup MySQL database:**
   - Start your MySQL server
   - Create a database named `crud_db`:
     ```sql
     CREATE DATABASE crud_db;
     ```

5. **Run the application:**
   ```bash
   go run main.go
   ```

6. **Access the application:**
   Open your browser and go to: `http://localhost:8002` (or the port you configured)

## Project Structure

```
example-crud-go-sample/
├── main.go              # Main application file
├── go.mod              # Go modules file
├── go.sum              # Go modules checksum
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── .dockerignore        # Docker ignore file
├── config.env.example   # Example environment configuration
├── .gitignore          # Git ignore file
├── views/
│   └── index.html      # HTML template
├── public/
│   └── script.js       # JavaScript for frontend interactions
└── README.md           # This file
```

## API Endpoints

- `GET /` - Display all users (HTML page)
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID (JSON)
- `PUT /users/:id` - Update user by ID
- `DELETE /users/:id` - Delete user by ID

## Database Schema

The application uses a simple User model:

```go
type User struct {
    ID    uint   `json:"id" gorm:"primaryKey"`
    Name  string `json:"name"`
    Email string `json:"email"`
}
```

## Technologies Used

- **Backend:** Go, Fiber framework, GORM, godotenv
- **Database:** MySQL
- **Frontend:** HTML5, Bootstrap 5, JavaScript
- **Icons:** Font Awesome

## Environment Variables

The application uses the following environment variables (defined in `config.env`):

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_HOST` | MySQL host address | `127.0.0.1` |
| `DB_PORT` | MySQL port | `3306` |
| `DB_USER` | MySQL username | `root` |
| `DB_PASSWORD` | MySQL password | (required) |
| `DB_NAME` | Database name | `crud_db` |
| `APP_PORT` | Application port | `3000` |

## Troubleshooting

1. **Database connection error:**
   - Make sure MySQL is running
   - Check the database credentials in `config.env`
   - Ensure the database `crud_db` exists

2. **Port already in use:**
   - Change the `APP_PORT` in `config.env`

3. **Module not found errors:**
   - Run `go mod tidy` to install dependencies

4. **Config file not found:**
   - Make sure `config.env` exists and has the correct format
   - Copy from `config.env.example` if needed

## Docker Commands

### Build and Run with Docker Compose
```bash
# Start services in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and start
docker-compose up -d --build
```

### Manual Docker Build
```bash
# Build the image
docker build -t crud-app .

# Run with environment variables
docker run -p 8002:8002 \
  -e DB_HOST=your-mysql-host \
  -e DB_PASSWORD=your-mysql-password \
  crud-app
```

## License

This project is open source and available under the MIT License. 