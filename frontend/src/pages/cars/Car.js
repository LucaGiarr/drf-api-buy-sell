import React from "react";
import styles from "../../styles/Car.module.css";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import Avatar from "../../components/Avatar";

const CarAreaInfo = (props) => {
  const {
    // owner,
    id,
    make,
    model,
    price,
    city,
    created_on,
    car_photo,
    condition,
    year,
    chilometers,
    fuel_type,
    transmission,
    engine,
  } = props;

  // const currentUser = useCurrentUser();
  // const is_owner = currentUser?.username === owner;

  return (
    <>
    <Row className={styles.row}>
      <Col className={styles.col} lg={4} md={5} >
        <img className={styles.image} variant="top" src={car_photo} alt="car" />
      </Col>

      <Link to={`/cars/${id}`}>
        <Col className={styles.info}>
          <div>
            <h4 className={styles.title}>{make} {model}</h4>
            <p className={styles.city_date}>{city} - {created_on}</p>
            <p className={styles.price}>&euro; {price}</p>
            <span className={styles.features}>Condition: {condition}</span>
            <span className={styles.features}>Mileage: {chilometers}km</span>
            <span className={styles.features}>Year: {year}</span>
            
          </div>
          <div className="mt-2">
            <span className={styles.features}>Engine: {engine}cc</span>
            <span className={styles.features}>Fuel type: {fuel_type}</span>
            <span className={styles.features}>Transmission: {transmission}</span>
            
          </div>
        </Col>
      </Link>
    </Row>
        
    </>
  );
};

export default CarAreaInfo;