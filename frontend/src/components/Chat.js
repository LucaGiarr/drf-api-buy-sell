import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from "../styles/ChatComponent.module.css";
import btnStyles from "../styles/Button.module.css";


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

  return (
    <div className={styles.chat_container}>
      <div>
        {Array.isArray(messages) ? (
            messages.map((msg) => <div key={msg.id} className={styles.message_container}>
              <p className={styles.message_time}>{msg.timestamp}</p>
              <p className={styles.message_sender}>{msg.sender_username}</p>
              <p>{msg.content}</p>
              </div>)
          ) : (
            <p>No messages available.</p>
          )}
      </div>
      <div className={styles.input_container}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.input_field}
        />
      </div>
      
      <button onClick={sendMessage} className={`${btnStyles.Button} ${btnStyles.Wide}`}>Send</button>

    </div>
  );
};

