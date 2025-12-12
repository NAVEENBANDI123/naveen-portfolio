export const handler = async (event, context) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // FREE GROQ AI CALL
    const aiResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-70b-versatile",
        messages: [
          { role: "system", content: "You are Naveen's assistant. Reply politely and clearly." },
          { role: "user", content: message }
        ]
      })
    });

    const aiData = await aiResponse.json();
    const aiReply = aiData.choices?.[0]?.message?.content || "Sorry, I couldn't generate a reply.";

    // SEND EMAIL USING EMAILJS
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: "service_qfhyfua",
        template_id: "template_i4ypccb", // Auto-Reply (user gets)
        user_id: "fdXAq8JIVcWc7CcKP",
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          ai_reply: aiReply
        }
      })
    });

    // SEND ADMIN EMAIL (You receive it)
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: "service_qfhyfua",
        template_id: "template_contactus", // Your admin template ID
        user_id: "fdXAq8JIVcWc7CcKP",
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          ai_reply: aiReply
        }
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error("FUNCTION ERROR →", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
