import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'company name is required'],
    },
    location: { type: String, required: true },
    website: {
      type: String,
    },
    industry: {
      type: String,
    },
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
      },
    ],
  },
  { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

export default Company;
