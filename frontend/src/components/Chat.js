import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ChatComponent = ({ sender, receiver }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages on component mount
    fetchMessages();
  }, [sender, receiver]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`/api/messages/?sender=${sender}&receiver=${receiver}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setMessages([]);
    }
  };

  const sendMessage = async () => {
    try {
      await axios.post('/api/messages/', {
        sender: sender, 
        receiver: receiver,
        content: newMessage,
      });
      setNewMessage('');
      // Refetch messages after sending a new message
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  return (
    <div>
      <div>
        {Array.isArray(messages) ? (
            messages.map((msg) => <div key={msg.id}>{msg.content}</div>)
          ) : (
            <p>No messages available.</p>
          )}
        {/* {messages.map((msg) => (
          <div key={msg.id}>{msg.content}</div>
        ))} */}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

// export default ChatComponent;
