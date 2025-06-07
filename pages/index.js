import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setReply(data.reply);
    setLoading(false);
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Groq Chat</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage} disabled={loading} style={{ padding: '10px 20px' }}>
        {loading ? 'Sending...' : 'Send'}
      </button>
      <div style={{ marginTop: 20 }}>
        <h3>Response:</h3>
        <div style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f1f1f1', padding: 10 }}>{reply}</div>
      </div>
    </div>
  );
}