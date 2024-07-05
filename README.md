
# Login/Register (JWT & bcrypt)

This project is a secure login and registration system built using React with TypeScript for the frontend and Node.js with Express for the backend. It utilizes bcrypt for password hashing and JWT (JSON Web Token) for authentication, ensuring security for user credentials and sessions.


## Screenshots
JWT is stored in a cookie
![JWT Screenshot](https://i.ibb.co/ChSKqV1/Screenshot-2024-07-04-213225.png)

Backend Registeration Validation
![JWT Screenshot](https://i.ibb.co/fMyH7sH/backend-valid.png)

JWT Authentication Validation
![JWT Screenshot](https://i.ibb.co/P4qCfyH/jwt-middlewar.png)


## Installation

Install my-project with npm

### Backend
```bash 
  git clone https://github.com/HasanHammadDev/Login-Page-React-Typescript.git
  cd Login-Page-React-Typescript
  cd server
  npm install
  node server
```
### Frontend
```bash 
  cd Login-Page-React-Typescript
  npm install
  npm run dev
```

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server directory.

`VITE_REACT_APP_API_ENDPOINT`=YOUR_APP_API_ENDPOINT

And you will need to add the following environment variables to your .env file in the server directory.

`PORT`=3000

`URI`=your_mongodb_connection_string

`JWT_SECRET`=YOUR_JWT_SECRET


## Contributing

Contributions are always welcome!


