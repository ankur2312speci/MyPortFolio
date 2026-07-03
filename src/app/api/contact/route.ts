import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields (Name, Email, Subject, Message) are required." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    // Fallback simulation in case the env variable is missing (useful for initial setups/dev mode)
    if (!accessKey) {
      console.warn("WEB3FORMS_ACCESS_KEY is not defined in environment variables. Simulating success fallback.");
      return NextResponse.json({
        success: true,
        message: "Message simulation success. (Note: Set WEB3FORMS_ACCESS_KEY env variable to receive real emails).",
      });
    }

    // Submit request to Web3Forms secure endpoint
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        from_name: `${name} (Portfolio Inquiry)`,
        subject: `[Portfolio Inquiry] ${subject}`,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been transmitted successfully!",
      });
    } else {
      return NextResponse.json(
        { success: false, error: data.message || "Failed to deliver message via provider." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form endpoint error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal gateway error.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
