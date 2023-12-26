import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import styles from "../styles/ChatComponent.module.css";
import btnStyles from "../styles/Button.module.css";

export const ChatComponent = ({ sender, receiver, carId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);

      if (carId) {
        const response = await axios.get(`/api/messages/?car_id=${carId}`);
        setMessages(response.data.results);
      }

    } catch (error) {
      console.error('Error fetching messages:', error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }, [sender, receiver, carId]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

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
        {loading ? (
          <p>Loading messages...</p>
        ) : Array.isArray(messages) ? (
          messages.map((msg) => (
            <div key={msg.id} className={styles.message_container}>
              <p className={styles.message_time}>{msg.timestamp}</p>
              <p className={styles.message_sender}>{msg.sender_username}</p>
              <p>{msg.content}</p>
            </div>
          ))
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
