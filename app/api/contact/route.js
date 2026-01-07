import { NextResponse } from "next/server";
import { connectDB_Quote } from "@/lib/config/db_quote";
import ConsumerQuote from "@/lib/models/consumerquote";

export async function POST(req) {
  try {
    await connectDB_Quote();
    const body = await req.json();

    const { name, email, subject, message, location, bill } = body;

    const existingQuote = await ConsumerQuote.findOne({ email });
    if (existingQuote) {
      return NextResponse.json(
        { message: "Email already submitted a quote" },
        { status: 409 }
      );
    }

    await ConsumerQuote.create({
      name,
      email,
      location,
      bill,
      subject,
      message,
      status: "Pending",
    });

    return NextResponse.json(
      { message: "Quote submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    await connectDB_Quote();
    const consumerQuotes = await ConsumerQuote.find().sort({ createdAt: -1 });

    return NextResponse.json({ consumerQuotes }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
