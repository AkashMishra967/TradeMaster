import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },

  email: {
    type: String,
    required: true,
    unique: true, // 🔥 duplicate email nahi chalega
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6, // 🔐 minimum security
  },
}, {
  timestamps: true, // createdAt, updatedAt auto add
});



export default User;