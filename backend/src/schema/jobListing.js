import mongoose from 'mongoose';

const jobListingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Job title is required'],
    },
    description: {
      type: String,
      required: [true, 'Job description is required'],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: [true, 'Company name is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    salary: {
      type: Number,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Posted by whom is required'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobListingSchema);

export default Job;
