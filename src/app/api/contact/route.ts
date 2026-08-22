import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Optional webhook dispatch (e.g. CRM / Slack / Telegram)
    // Silently log or forward
    console.log("[Inquiry Received]", {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully. Our team will contact you within 2 business hours.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please chat with us on WhatsApp." },
      { status: 500 }
    );
  }
}
