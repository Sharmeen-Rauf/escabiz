import mongoose, { Schema, Document } from 'mongoose';

export interface IFormSubmission extends Document {
  serviceRequest: string;
  prefix?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  additionalNotes?: string;
  discovery: string;
  consent: boolean;
  submittedAt: Date;
  status?: 'new' | 'contacted' | 'qualified' | 'closed';
}

const FormSubmissionSchema = new Schema<IFormSubmission>(
  {
    serviceRequest: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    additionalNotes: {
      type: String,
      maxlength: 250,
    },
    discovery: {
      type: String,
      required: true,
    },
    consent: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'closed'],
      default: 'new',
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.FormSubmission || mongoose.model<IFormSubmission>('FormSubmission', FormSubmissionSchema);

