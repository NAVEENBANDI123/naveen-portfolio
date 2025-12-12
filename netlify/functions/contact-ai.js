import OpenAI from "openai";
import fetch from "node-fetch";

export const handler = async (event, context) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // AI Reply
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Naveen's assistant. Reply politely." },
        { role: "user", content: message }
      ]
    });

    const aiReply = completion.choices[0].message.content;

    // Send via EmailJS
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: "service_qfhyfua",
        template_id: "template_i4ypccb",
        user_id: "fdXAq8JIVcWc7CcKP",
        template_params: {
          user_name: name,
          user_email: email,
          user_message: message,
          ai_reply: aiReply,
        }
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, aiReply }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
