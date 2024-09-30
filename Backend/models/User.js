// models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
});

// Method to hash the password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('Password')) {
    this.Password = await bcrypt.hash(this.Password, 10);
  }
  next();
});

// Create a User model
const User = mongoose.model('User', userSchema);

export default User;
