import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import { useMediaQuery } from "react-responsive";

// import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import CarImages from "./CarImages";
import CarAreaInfo from "./CarAreaInfo";
import CarAreaInfoChat from "./CarAreaInfoChat";
import CarDetailsSection from "./CarDetailsSection";

function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: car }] = await Promise.all([
          axiosReq.get(`/cars/${id}`),
        ]);
        setCar({ results: [car] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  // Use useMediaQuery hook to determine screen size
  const isBelowLargeScreen = useMediaQuery({ maxWidth: 992 });

  return (
    <>
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={7}>
        <CarImages {...car.results[0]} />
      </Col>

      {isBelowLargeScreen ? (
          <Col className="py-2 p-0 p-lg-2" lg={5}>
            <CarAreaInfo {...car.results[0]} CarPage />
            <CarAreaInfoChat {...car.results[0]} />
          </Col>
        ) : (
          <>
            <Col lg={5} className="d-none d-lg-block p-0 p-lg-2">
              <CarAreaInfo {...car.results[0]} CarPage />
              
            </Col>
            <Row>
              <CarAreaInfoChat {...car.results[0]} />
            </Row>
          </>
          
        )}

    </Row>
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={7}>
        <CarDetailsSection {...car.results[0]} />
      </Col>
    </Row>
    </>
    
  );
}

export default CarPage;
