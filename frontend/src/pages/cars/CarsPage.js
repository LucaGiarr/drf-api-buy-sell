import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Car from "./Car";
import CarPage from "./CarPage";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/CarsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

// import NoResults from "../../assets/no-results.png";

function CarsPage({ message, filter = "" }) {
  
    const [cars, setCars] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axiosReq.get(`/cars/?${filter}`);
        setCars(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchCars();
  }, [filter, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2">
        {hasLoaded ? (
          <>
            {cars.results.length ? (
              cars.results.map((car) => (
                <Car key={car.id} {...car} setCars={setCars} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                {/* <Asset src={NoResults} message={message} /> */}
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      
    </Row>
  );

}

export default CarsPage;