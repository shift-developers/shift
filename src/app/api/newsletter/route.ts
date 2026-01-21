import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Invalid email format" },
      { status: 400 }
    );
  }

  try {
    const KIT_API_BASE_URL = "https://api.kit.com/v4";
    const KIT_API_KEY = process.env.KIT_API_KEY;
    const KIT_FORM_ID = process.env.KIT_FORM_ID;

    if (!KIT_API_KEY) {
      console.error("KIT_API_KEY is not configured");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!KIT_FORM_ID) {
      console.error("KIT_FORM_ID is not configured");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const directSubscriberUrl = `${KIT_API_BASE_URL}/subscribers`;
    const directSubscriberBody = {
      email_address: email,
      tags: ["newsletter-signup"],
    };

    console.log("Trying direct subscriber creation first...");

    let kitResponse = await fetch(directSubscriberUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": KIT_API_KEY,
      },
      body: JSON.stringify(directSubscriberBody),
    });

    if (!kitResponse.ok) {
      console.log(
        "Direct subscriber creation failed, trying form-specific endpoint..."
      );

      const formSubscriberUrl = `${KIT_API_BASE_URL}/forms/${KIT_FORM_ID}/subscribers`;
      const formSubscriberBody = {
        email_address: email,
      };

      kitResponse = await fetch(formSubscriberUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": KIT_API_KEY,
        },
        body: JSON.stringify(formSubscriberBody),
      });
    }

    if (!kitResponse.ok) {
      console.error("Kit API Error Status:", kitResponse.status);

      const responseText = await kitResponse.text();
      console.error("Kit API Error Response:", responseText);

      if (kitResponse.status === 422) {
        return NextResponse.json(
          { message: "This email is already subscribed or invalid." },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { message: "Failed to subscribe to newsletter" },
        { status: 500 }
      );
    }

    const data = await kitResponse.json();

    return NextResponse.json({
      message: "Successfully subscribed to newsletter!",
      data: data,
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "An error occurred while subscribing to the newsletter" },
      { status: 500 }
    );
  }
}
