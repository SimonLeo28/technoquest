import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    selectedProblem: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite issue in development
export default mongoose.models.Register || mongoose.model('Register', RegisterSchema);
