import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const ChatComponent = ({ sender, receiver, carId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages on component mount
    fetchMessages();
  }, [sender, receiver, carId]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`/api/messages/?car_id=${carId}`);
      setMessages(response.data.results);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setMessages([]);
    }
  };

  

  const sendMessage = async () => {
    try {
      await axios.post('/api/messages/', {
        sender: sender.pk,
        receiver: receiver,
        content: newMessage,
        car_id: carId,
      });
      setNewMessage('');
      // Refetch messages after sending a new message
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  console.log(messages);


  return (
    <div>
      <div>
        {Array.isArray(messages) ? (
            messages.map((msg) => <div key={msg.id}>
              <p>{msg.timestamp}</p>
              <strong>{msg.sender}</strong>
              <p>{msg.content}</p>
              </div>)
          ) : (
            <p>No messages available.</p>
          )}
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

