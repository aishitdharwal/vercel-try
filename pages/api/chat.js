export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [{ role: 'user', content: message }]
      })
    });

    const data = await groqRes.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
