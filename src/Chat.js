import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot, serverTimestamp, orderBy, query } from "firebase/firestore";

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsub();
  }, []);

  const sendMessage = async () => {
    if (!text.trim()) return;
    await addDoc(collection(db, "messages"), {
      text,
      name: user.displayName,
      timestamp: serverTimestamp(),
    });
    setText("");
  };

  return (
    <div>
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid gray", margin: "20px", padding: "10px" }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.name}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
