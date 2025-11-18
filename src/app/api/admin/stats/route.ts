import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import FormSubmission from '@/models/FormSubmission';
import { verifyAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const user = verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const [
      total,
      newCount,
      contactedCount,
      qualifiedCount,
      closedCount,
      todayCount,
      thisWeekCount,
      thisMonthCount,
    ] = await Promise.all([
      FormSubmission.countDocuments(),
      FormSubmission.countDocuments({ status: 'new' }),
      FormSubmission.countDocuments({ status: 'contacted' }),
      FormSubmission.countDocuments({ status: 'qualified' }),
      FormSubmission.countDocuments({ status: 'closed' }),
      FormSubmission.countDocuments({
        submittedAt: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      }),
      FormSubmission.countDocuments({
        submittedAt: {
          $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      }),
      FormSubmission.countDocuments({
        submittedAt: {
          $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      stats: {
        total,
        byStatus: {
          new: newCount,
          contacted: contactedCount,
          qualified: qualifiedCount,
          closed: closedCount,
        },
        byPeriod: {
          today: todayCount,
          thisWeek: thisWeekCount,
          thisMonth: thisMonthCount,
        },
      },
    });
  } catch (error: any) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats', details: error.message },
      { status: 500 }
    );
  }
}

