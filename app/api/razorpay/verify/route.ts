import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!secret) {
      console.error('RAZORPAY_KEY_SECRET is not defined in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment is verified. Here you could update your database, send confirmation emails, etc.
      return NextResponse.json(
        { message: 'Payment verified successfully', isAuthentic: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Invalid payment signature', isAuthentic: false },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying Razorpay signature:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
