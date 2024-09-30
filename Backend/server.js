// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; // Import the user routes
import path from 'path';
import { request } from 'http';

dotenv.config(); // Load environment variables

const app = express();
const port = 3000;

const __dirname=path.resolve();
console.log(__dirname)
// Middleware to enable CORS
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});


// MongoDB Database Configuration
const mongo = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use the user routes
app.use('/api', userRoutes); // Prefix all user routes with /api

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
