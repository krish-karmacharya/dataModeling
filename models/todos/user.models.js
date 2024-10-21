import mongoose from 'mongoose';

const userScheme = new mongoose.Schema(
  {
    // username: String,
    // email: String,
    // isActive: Boolean,
    // professional approach it to make object like below to define more
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userScheme);
