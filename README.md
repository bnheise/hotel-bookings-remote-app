# HotelBooking
This project is adapted from [this project](https://github.com/saidMounaim/hotel-booking).
We have the original project in the original folder, but we also have the project refactored to run as Liferay remote apps.

## Features:

- Room reviews and ratings
- Room pagination
- Room search feature
- User profile with bookings
- Admin Room management
- Admin User management
- Admin Booking management

## Technology Stack:

- TypeScript
- Node js
- Express Js
- MongoDB
- JWT
- React
- React Bootstrap
- Redux
- React Paypal Button V2

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

## Install Dependencies

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend
npm run client

# Run backend
npm run server
```

- Version: 1.0.0
- License: MIT
- Author: Said Mounaim
