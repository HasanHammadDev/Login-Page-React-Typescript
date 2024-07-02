import express from 'express';
import connectDB from './connectDB.js';
import loginRoute from './routes/loginRoute.js';
import profileRoute from './routes/profileRoute.js';
import registerRoute from './routes/registerRoute.js';
import cors from 'cors';
import authJwtCookie from './JWT/cookieJwtAuth.js';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

// Connecting to database
connectDB();

//Routes
app.use('/register', registerRoute)
app.use('/login', loginRoute);
app.use('/profile', authJwtCookie, profileRoute);

app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).send({ success: true });
});



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});