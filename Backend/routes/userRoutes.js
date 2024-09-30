// routes/userRoutes.js
import express from 'express';
import User from '../models/User.js'; // Import the User model
import bcrypt from 'bcryptjs';

const router = express.Router();

// Route to handle user registration
router.post('/register', async (req, res) => {
  const { t1, t2, t3 } = req.body;

  try {
    const newUser = new User({
      Name: t1,
      Email: t2,
      Password: t3, // The password will be hashed in the User model's pre-save hook
    });

    await newUser.save();

    res.json({ status: 'success', message: 'Successfully registered' });
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// Route to handle user login
router.post('/userlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ Email: email });

    if (user && await bcrypt.compare(password, user.Password)) {
      res.send('Login successfully');
    } else {
      res.send('Login failed: invalid email or password');
    }
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'Database error: ' + err });
  }
});

export default router;
