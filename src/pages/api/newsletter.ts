import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // Kit API configuration
    const KIT_API_BASE_URL = "https://api.kit.com/v4";
    const KIT_API_KEY = process.env.KIT_API_KEY;
    const KIT_FORM_ID = process.env.KIT_FORM_ID;

    if (!KIT_API_KEY) {
      console.error("KIT_API_KEY is not configured");
      return res.status(500).json({ message: "Server configuration error" });
    }

    if (!KIT_FORM_ID) {
      console.error("KIT_FORM_ID is not configured");
      return res.status(500).json({ message: "Server configuration error" });
    }

    // First, let's try to create a subscriber directly (alternative approach)
    const directSubscriberUrl = `${KIT_API_BASE_URL}/subscribers`;
    const directSubscriberBody = {
      email_address: email,
      // You can add tags to assign the subscriber to specific sequences/forms
      tags: ["newsletter-signup"],
    };

    console.log("Trying direct subscriber creation first...");
    console.log("Direct Subscriber URL:", directSubscriberUrl);
    console.log("Direct Subscriber Body:", directSubscriberBody);

    let kitResponse = await fetch(directSubscriberUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": KIT_API_KEY,
      },
      body: JSON.stringify(directSubscriberBody),
    });

    // If direct subscriber creation fails, try the form-specific endpoint
    if (!kitResponse.ok) {
      console.log(
        "Direct subscriber creation failed, trying form-specific endpoint..."
      );

      const formSubscriberUrl = `${KIT_API_BASE_URL}/forms/${KIT_FORM_ID}/subscribers`;
      const formSubscriberBody = {
        email_address: email,
      };

      console.log("Form Subscriber URL:", formSubscriberUrl);
      console.log("Form Subscriber Body:", formSubscriberBody);
      console.log(
        "Kit API Key (first 10 chars):",
        KIT_API_KEY?.substring(0, 10) + "..."
      );

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
      console.error("Kit API Error Headers:", kitResponse.headers);

      const responseText = await kitResponse.text();
      console.error("Kit API Error Response:", responseText);

      try {
      } catch (parseError) {
        console.error("Failed to parse Kit API error response as JSON", parseError);
        return res.status(500).json({
          message: "Kit API returned an unexpected response format",
        });
      }

      // Handle specific Kit API errors
      if (kitResponse.status === 422) {
        // Email might already be subscribed or invalid
        return res.status(400).json({
          message: "This email is already subscribed or invalid.",
        });
      }

      return res.status(500).json({
        message: "Failed to subscribe to newsletter",
      });
    }

    const data = await kitResponse.json();

    return res.status(200).json({
      message: "Successfully subscribed to newsletter!",
      data: data,
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return res.status(500).json({
      message: "An error occurred while subscribing to the newsletter",
    });
  }
}
