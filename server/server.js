import express from 'express';
import connectDB from './connectDB.js';
import authRoutes from './routes/authRoutes.js';
import editRoute from './routes/editRoute.js';
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

//Register user route
app.use('/register', registerRoute)
app.use('/auth', authRoutes);
app.use('/edit', authJwtCookie, editRoute);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});