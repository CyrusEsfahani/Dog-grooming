# Dog Grooming Web Application

A modern web application for managing dog grooming services, appointments, and customer interactions.

## Features

- Homepage with service overview and call-to-action
- Detailed services page
- Online booking system
- Location mapping
- Contact form
- Blog/Resources section

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

### Additional Technologies
- Google Maps API
- Nodemailer
- JWT Authentication

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```
3. Set up environment variables
4. Start development servers:
   ```bash
   npm run dev
   ```

## Project Structure

```
├── client/           # React frontend
├── server/           # Node.js backend
├── package.json      # Root package.json
└── README.md        # Project documentation
```

## Environment Variables

Create `.env` files in both client and server directories with the following variables:

```env
MONGODB_URI=your_mongodb_uri
GOOGLE_MAPS_API_KEY=your_api_key
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

## API Endpoints

- POST /api/auth/register - Register new user
- POST /api/auth/login - User login
- GET /api/services - Get all services
- POST /api/appointments - Create appointment
- GET /api/appointments - Get user appointments
- POST /api/contact - Submit contact form

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the ISC License - see the LICENSE file for details.