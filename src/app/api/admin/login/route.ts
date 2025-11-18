import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'escabiz_secret_key_2025_change_in_production';

export async function POST(request: NextRequest) {
  try {
    // Connect to database first
    try {
      await connectDB();
    } catch (dbError: any) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { 
          error: 'Database connection failed', 
          details: dbError.message || 'Please check your MongoDB connection string' 
        },
        { status: 500 }
      );
    }

    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    const defaultUsername = (process.env.ADMIN_USERNAME || 'admin').toLowerCase();
    const defaultPassword = process.env.ADMIN_PASSWORD || 'escabiz2025';
    const inputUsername = username.toLowerCase();

    // Check if admin exists
    let admin = await Admin.findOne({ username: inputUsername });

    if (!admin) {
      // Only create admin if username matches default
      if (inputUsername === defaultUsername) {
        try {
          admin = new Admin({
            username: defaultUsername,
            password: defaultPassword, // Will be hashed by pre-save hook
          });
          await admin.save();
        } catch (createError: any) {
          console.error('Error creating admin:', createError);
          // If creation fails (e.g., duplicate), try to find again
          admin = await Admin.findOne({ username: inputUsername });
          if (!admin) {
            return NextResponse.json(
              { error: 'Failed to create admin account', details: createError.message },
              { status: 500 }
            );
          }
        }
      } else {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }
    }

    // Verify password
    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Create response with token
    const response = NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        user: {
          id: admin._id,
          username: admin.username,
        },
      },
      { status: 200 }
    );

    // Set HTTP-only cookie
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed', details: error.message },
      { status: 500 }
    );
  }
}

