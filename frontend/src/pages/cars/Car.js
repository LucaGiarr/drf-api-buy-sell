import React from "react";
import styles from "../../styles/Car.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Button, Media, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";

const CarAreaInfo = (props) => {
  const {
    owner,
    make,
    model,
    price,
    city,
    created_on,
    car_photo,
    condition,
    year,
    chilometers,
    body_style,
    engine,
    carPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <>
    {/* <Row className={styles.row}>
      <Card>
        <Col className={styles.col} lg={4} md={5} >
          <Card.Img className={styles.image} variant="top" src={car_photo} />
        </Col>

        <Col>
          <Card.Body>
            <Card.Title className={styles.title}>{make} {model}</Card.Title>
            <Card.Text>{city} - {created_on}</Card.Text>
            <Card.Text>&euro; {price}</Card.Text>
            <Card.Text>{condition} {year} {chilometers}km {body_style} {engine}cc</Card.Text>
          </Card.Body>
        </Col>
      </Card>
    </Row> */}

    <Row className={styles.row}>
      
      <Col className={styles.col} lg={4} md={5} >
        <img className={styles.image} variant="top" src={car_photo} />
      </Col>

      <Col>
        <h4 className={styles.title}>{make} {model}</h4>
        <p>{city} - {created_on}</p>
        <p>&euro; {price}</p>
        <span className="mr-4">{condition}</span>
        <span className="mr-4">{year}</span>
        <span className="mr-4">{chilometers}km</span>
        <span className="mr-4">{body_style}</span>
        <span>{engine}cc</span>
      </Col>
    </Row>
        
    </>
  );
};

export default CarAreaInfo;