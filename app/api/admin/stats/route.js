import { NextResponse } from "next/server";
import { connectDB_Quote } from "@/lib/config/db_quote";
import ConsumerQuote from "@/lib/models/consumerquote";

export async function GET() {
  try {
    await connectDB_Quote();

    const totalQuotes = await ConsumerQuote.countDocuments();

    return NextResponse.json({
      totalQuotes
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
