import React from "react";
// import styles from "../../styles/CarAreaInfo.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Media } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";

import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
// import { MoreDropdown } from "../../components/MoreDropdown";
import { EditDeleteButtons } from "../../components/MoreButtons";
import styles from "../../styles/CarAreaInfo.module.css";



const CarAreaInfo = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    car_title,
    price,
    city,
    created_on,
    carPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/cars/${id}/edit`);
  };
  
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/cars/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className={styles.info}>
      <div className="d-inline">
        <h3 className={styles.title}>
          <strong>{car_title}</strong>
        </h3>
      
      </div>
      
      <p>
        <i class="pl-0 fa-solid fa-location-dot"></i>
        <span>{city}</span>
      </p>
      <p>
        <strong>Created on: </strong>
        <span>{created_on}</span>
      </p>

      <hr></hr>
      <h3>
          <strong className={styles.price}>&euro; {price}</strong>
      </h3>
      <hr></hr>

      <Media className="align-items-center justify-content-between">
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} height={55} />
          <strong>{owner}</strong>
        </Link>
      </Media>

      {is_owner ? (
        <div className={styles.butt_container}>
        <EditDeleteButtons
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        </div>
        ) : (
          <>
          <div className={styles.contact_me}>
            <Link to={`/profiles/${profile_id}`}>
              <strong>Ask for more info</strong>
            </Link>
          </div>
          
          </>
        )}
    </div>
    </>
  );
};

export default CarAreaInfo;