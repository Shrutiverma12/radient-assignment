import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: [true, 'Username Already Exists'],
      match: [/^[a-zA-Z)]+$/, 'Username must contain only letters'],
      minLength: [3, 'Username must be at least 3 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['admin', 'employer', 'jobseeker'],
      default: 'jobseeker',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', function saveUser(next) {
  if (this.new) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const hashedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = hashedPassword;
  }
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
