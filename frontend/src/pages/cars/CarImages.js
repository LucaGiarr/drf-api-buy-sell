import React from "react";
import styles from "../../styles/CarImages.module.css";
import Carousel from "react-bootstrap/Carousel";

const CarImages = (props) => {
  const {
    car_photo,
    car_photo_1,
    car_photo_2,
    car_photo_3,
    car_photo_4,
  } = props;

  return (
    <>
    <Carousel className={styles.carousel}>
      <Carousel.Item interval={1000}>
          <img
          className="d-block w-100"
          src={car_photo}
          alt="First slide"
          />
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={car_photo_1}
          alt="Second slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car_photo_2}
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car_photo_3}
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car_photo_4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
    
  );
};

export default CarImages;