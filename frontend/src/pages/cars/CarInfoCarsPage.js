import React from "react";
import styles from "../../styles/Car.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';

const CarInfoCarsPage = (props) => {
  const {
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

  return (
    <>
      <Row className={styles.row}>
        <Col className={styles.col} lg={4} md={5} xs={12}>
          <img
            className={`${styles.image} img-fluid`}
            variant="top"
            src={car_photo}
            alt="car"
          />
        </Col>

        <Col className={styles.info} lg={8} md={7} xs={12}>
          <Link to={`/cars/${id}`}>
            <div>
              <h4 className={styles.title}>{make} {model}</h4>
              <p className={styles.city_date}>{city} - {created_on}</p>
              <p className={styles.price}>&euro; {price}</p>
            </div>
            <div className="mt-2">
              <span className={styles.features}>Condition: {condition}</span>
              <span className={styles.features}>Mileage: {chilometers}km</span>
              <span className={styles.features}>Year: {year}</span>
              <span className={styles.features}>Engine: {engine}cc</span>
              <span className={styles.features}>Fuel type: {fuel_type}</span>
              <span className={styles.features}>Transmission: {transmission}</span>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default CarInfoCarsPage;
