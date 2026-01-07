import { NextResponse } from "next/server";
import { connectDB_Quote } from "@/lib/config/db_quote";
import ConsumerQuote from "@/lib/models/consumerquote";

export async function PATCH(req, context) {
  try {
    await connectDB_Quote();

    // ✅ params must be awaited
    const { id } = await context.params;

    const updated = await ConsumerQuote.findByIdAndUpdate(
      id,
      { status: "Contacted" },
      { new: true }
    );

    return NextResponse.json({ updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
