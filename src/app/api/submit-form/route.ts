import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import FormSubmission from '@/models/FormSubmission';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      serviceRequest,
      prefix,
      name,
      email,
      phone,
      company,
      additionalNotes,
      discovery,
      consent,
    } = body;

    // Validate required fields
    if (!serviceRequest || !name || !email || !phone || !discovery) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create form submission
    const submission = new FormSubmission({
      serviceRequest,
      prefix: prefix || undefined,
      name,
      email,
      phone,
      company: company || undefined,
      additionalNotes: additionalNotes || undefined,
      discovery,
      consent: consent || false,
      status: 'new',
    });

    await submission.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        id: submission._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form', details: error.message },
      { status: 500 }
    );
  }
}

