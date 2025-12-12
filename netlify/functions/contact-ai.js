export const handler = async (event, context) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Call Groq API (Free AI Model)
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
    const aiReply = aiData.choices?.[0]?.message?.content || "Sorry, I could not generate a reply.";

    // Send Email with EmailJS
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
    console.error("FUNCTION ERROR →", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
