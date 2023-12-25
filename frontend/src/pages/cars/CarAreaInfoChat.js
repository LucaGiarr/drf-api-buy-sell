import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom';

import { ChatComponent } from "../../components/Chat";
import styles from "../../styles/CarAreaInfo.module.css";


const CarAreaInfoChat = (props) => {
  const {
    id,
    profile_id,
  } = props;

  const currentUser = useCurrentUser(); 

  return (
    <>
      <div className={styles.contact_me}>
        <strong className={styles.title_message_box}>Leave a message</strong>

        {!currentUser ? (
          <p>
            You need to <Link to="/signin" className={styles.link_text}>Sign in</Link> to send a message.
          </p>
        ) : (
          <div>
          <ChatComponent
            sender={currentUser}
            receiver={profile_id}
            carId={id}
          />
          </div>
        )}  
      </div>
    </>
  );
};

export default CarAreaInfoChat;