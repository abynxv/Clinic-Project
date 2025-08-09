# Clinic Management System

A full-stack Clinic Management System built with **Django (backend)** and **React (frontend)**.  
This application provides comprehensive APIs for user authentication, managing doctors, and scheduling appointments.

## Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Doctor Management**: View and manage doctor profiles
- **Appointment Scheduling**: Create and manage patient appointments
- **Token-based Security**: JWT authentication with refresh token support

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `register/` | POST | User Registration |
| `login/` | POST | User Login |
| `token/refresh/` | POST | Refresh Access Token |
| `doctors/` | GET | Get List of Doctors |
| `appointments/` | GET | Get List of Appointments |
| `appointments/create/` | POST | Create a New Appointment |

### Example Request Bodies

#### User Registration
```json
POST /register/
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### User Login
```json
POST /login/
{
  "username": "johndoe",
  "password": "securepassword123"
}
```

#### Create Appointment
```json
POST /appointments/create/
{
  "doctor_id": 1,
  "appointment_date": "2025-08-07T14:30:00Z",
  "patient_name":"abhi",
  "age":"25"
}
```

#### Refresh Token
```json
POST /token/refresh/
{
  "refresh": "your_refresh_token_here"
}
```

---

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Backend (Django)

1. **Navigate to the backend folder**
   ```bash
   cd clinic-backend
   ```

2. **Create and activate a virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the development server**
   ```bash
   python manage.py runserver
   ```
   
   The backend will be available at: `http://127.0.0.1:8000`

### Frontend (React)

1. **Navigate to the frontend folder**
   ```bash
   cd clinic-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the React development server**
   ```bash
   npm start
   ```
   
   The frontend will be available at: `http://localhost:3000`

---

## Project Structure

```
clinic-project/
├── clinic-backend/          # Django backend
│   ├── manage.py
│   ├── requirements.txt
│   └── ...
├── clinic-frontend/         # React frontend
│   ├── package.json
│   ├── src/
│   └── ...
├── Clinic_API_Collection.json  # Postman collection
└── README.md
```

---

## Testing with Postman

A Postman collection is included in this repository as `Clinic_API_Collection.json`.

### How to use:
1. Open Postman
2. Click **Import** → **Upload Files**
3. Select `Clinic_API_Collection.json`
4. The collection will be imported with all endpoints ready for testing

### Authentication Headers
After logging in, include the access token in your requests:
```
Authorization: Bearer your_access_token_here
```
---

## Screenshots

The following screenshots demonstrate the application's functionality:

- **Dashboard**: Shows user dashboard interface
<img width="1844" height="983" alt="Screenshot from 2025-08-06 22-33-24" src="https://github.com/user-attachments/assets/9785d184-00d2-4fa9-ad04-4070f639aad1" />

- **Appointment Booking**: Demonstrates the appointment scheduling process
<img width="1850" height="984" alt="Screenshot from 2025-08-06 22-34-51" src="https://github.com/user-attachments/assets/10a86873-b699-47f4-a7c0-c2c7da8aaa8f" />

---

## Technology Stack

### Backend
- **Django**: Web framework
- **Django REST Framework**: API development
- **JWT**: Authentication
- **SQLite**: Database (default, configurable)

### Frontend
- **React**: UI framework
- **Axios**: HTTP client
- **React Router**: Navigation
- **Bootstrap/CSS**: Styling

---

## Development Notes

- This project is designed for **development/testing purposes only**
- Use HTTP (`http://127.0.0.1:8000`) for backend API testing
- HTTPS is not supported in the Django development server
- Default database is SQLite for easy setup
- CORS is configured to allow frontend-backend communication

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

---

## Support

If you encounter any issues or have questions, please:
1. Create a new issue with detailed information about the problem
2. Include steps to reproduce the issue

---

**Happy coding!**
