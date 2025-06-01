

A modern banking management system built with Angular 17 frontend and Spring Boot 3 backend.

## Features

- **User Authentication**: JWT-based secure authentication
- **Customer Management**: CRUD operations for bank customers
- **Account Management**: View and manage bank accounts
- **Role-Based Access Control**: Admin/Customer roles
- **Responsive UI**: Built with Bootstrap 5

## Technology Stack

### Frontend
- Angular 17
- RxJS 7.8
- Bootstrap 5.3
- JWT Authentication

### Backend
- Spring Boot 3.2
- Spring Security 6.1
- JPA/Hibernate
- MySQL 8.0

## Getting Started

### Prerequisites
- Node.js 18.x
- Angular CLI 17.x
- Java JDK 17
- MySQL 8.x

### Installation

1. **Backend Setup**:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

2. **Frontend Setup**:
```bash
npm install
ng serve
```

### Configuration
Configure your database connection in `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bank_db
spring.datasource.username=bank_user
spring.datasource.password=password
```

## Project Structure

```
banking-system/
├── frontend/           # Angular application
│   ├── src/
│   │   ├── app/        # Components and services
│   │   ├── assets/     # Static files
│   │   └── environments/ # Environment configs
│
└── backend/            # Spring Boot application
    ├── src/main/java/
    │   ├── config/     # Security and app config
    │   ├── entities/   # JPA entities
    │   ├── repositories/ # Data access layer
    │   └── web/       # REST controllers
    └── resources/     # Properties and static content
```

## API Documentation

### Authentication
**POST** `/auth/login`
```json
{
  "username": "admin",
  "password": "12345"
}
```

**Response**:
```json
{
  "access-token": "eyJhbGciOiJIUzUxMiJ9..."
}
```

### Customers
**GET** `/customers/search?keyword=Yass`
```json
[
  {
    "id": 1,
    "name": "Yassine",
    "email": "yassine@gmail.com"
  }
]
```

## Security

- JWT authentication with HS512 signing
- Role-based authorization
- CSRF protection
- Secure password storage with BCrypt

## Testing

Run unit tests:
```bash
# Frontend
ng test

# Backend
mvn test
```

## Deployment

### Frontend Options
- Vercel/Netlify
- Docker + Nginx

### Backend Options
- AWS Elastic Beanstalk
- Docker Compose

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License.

## Contact

Project Link: [https://github.com/yourusername/banking-system](https://github.com/yourusername/banking-system)
```

This README.md version:
- Is more concise and scannable
- Uses proper Markdown formatting
- Includes clear section headers
- Provides essential information without excessive technical details
- Maintains all key information from the original
- Follows standard README structure
- Is more welcoming to contributors

You can further customize it with your actual project links, contact information, and specific deployment instructions.
