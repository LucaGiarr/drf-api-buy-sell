import React from "react";
import styles from "../../styles/CarAreaInfo.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Media } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";

const CarAreaInfo = (props) => {
  const {
    // id,
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

  return (
    <>
    <h3>
        <strong>{car_title}</strong>
    </h3>
    <p>
      <strong>City: </strong>
      <span>{city}</span>
    </p>
    <p>
      <strong>Created on: </strong>
      <span>{created_on}</span>
    </p>
    <hr></hr>
    <h3>
        <strong>&euro; {price}</strong>
    </h3>
    <hr></hr>

    <Media className="align-items-center justify-content-between">
      <Link to={`/profiles/${profile_id}`}>
        <Avatar src={profile_image} height={55} />
        <strong>{owner}</strong>
      </Link>
    </Media>

    <div className="d-flex align-items-center">
      {/* {is_owner && carPage && "..."} */}
      {is_owner ? (
        <p>
          is owner
        </p>
      ) : (
        <p>
          is NOT owner
        </p>
      )}

    </div>
    
    </>
  );
};

export default CarAreaInfo;