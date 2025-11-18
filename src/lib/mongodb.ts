import mongoose from 'mongoose';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB() {
  // Check for both MONGODB_URI and MONGO_URI (common variations)
  const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!MONGODB_URI) {
    const envKeys = Object.keys(process.env).filter(key => key.includes('MONGO') || key.includes('DB'));
    throw new Error(
      `MONGODB_URI or MONGO_URI environment variable is not defined. ` +
      `For local development, add it to .env.local. ` +
      `For Vercel, add it in Project Settings > Environment Variables. ` +
      `Found related env vars: ${envKeys.length > 0 ? envKeys.join(', ') : 'none'}`
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;

