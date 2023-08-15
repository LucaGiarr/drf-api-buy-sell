import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import styles from "../../styles/AdvertCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Image } from "react-bootstrap";

function AdvertCreateForm() {
  const [errors, setErrors] = useState({});

  const [advertData, setAdvertData] = useState({
    car_title: "",
    make: "",
    model: "",
    year: "",
    condition: "",
    chilometers: "",
    engine: "",
    transmission: "",
    body_style: "",
    doors: "",
    fuel_type: "",
    color: "",
    price: "",
    city: "",
    car_photo: "",
    car_photo_1: "",
    car_photo_2: "",
    car_photo_3: "",
    car_photo_4: "",
    description: "",
  });

  const {
    car_title,
    make,
    model,
    year,
    condition,
    chilometers,
    engine,
    transmission,
    body_style,
    doors,
    fuel_type,
    color,
    price,
    city,
    car_photo,
    car_photo_1,
    car_photo_2,
    car_photo_3,
    car_photo_4,
    description} = advertData;

    const handleChange = (event) => {
      setAdvertData({
        ...advertData,
        [event.target.name]: event.target.value,
      });
    };

  const handleChangeImage = (event) => {

    if (event.target.id === 'car-photo-upload') {
      URL.revokeObjectURL(car_photo);
      setAdvertData({
        ...advertData,
        car_photo: URL.createObjectURL(event.target.files[0]),
      });
    } else if (event.target.id === 'car-photo1-upload') {
      URL.revokeObjectURL(car_photo_1);
      setAdvertData({
        ...advertData,
        car_photo_1: URL.createObjectURL(event.target.files[0]),
      });
    } else if (event.target.id === 'car-photo2-upload') {
      URL.revokeObjectURL(car_photo_2);
      setAdvertData({
        ...advertData,
        car_photo_2: URL.createObjectURL(event.target.files[0]),
      });
    } else if (event.target.id === 'car-photo3-upload') {
      URL.revokeObjectURL(car_photo_3);
      setAdvertData({
        ...advertData,
        car_photo_3: URL.createObjectURL(event.target.files[0]),
      });
    } else if (event.target.id === 'car-photo4-upload') {
      URL.revokeObjectURL(car_photo_4);
      setAdvertData({
        ...advertData,
        car_photo_4: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="car_title"
          value={car_title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Make</Form.Label>
        <Form.Control
          type="text"
          name="make"
          value={make}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          name="model"
          value={model}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="number"
          name="year"
          value={year}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Condition</Form.Label>
        <Form.Control
          type="text"
          name="condition"
          value={condition}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Chilometers</Form.Label>
        <Form.Control
          type="number"
          name="chilometers"
          value={chilometers}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Engine</Form.Label>
        <Form.Control
          type="number"
          name="engine"
          value={engine}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Transmission</Form.Label>
        <Form.Control
          type="text"
          name="transmission"
          value={transmission}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Body Style</Form.Label>
        <Form.Control
          type="text"
          name="body_style"
          value={body_style}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Doors</Form.Label>
        <Form.Control
          type="number"
          name="doors"
          value={doors}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fuel Type</Form.Label>
        <Form.Control
          type="text"
          name="fuel_type"
          value={fuel_type}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          name="color"
          value={color}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {/* <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button> */}
      
    </div>
  );

  return (
    <Form>
      <Row>
        <Col md={5} lg={5}>
          <Container className={appStyles.Content}>
            {textFields}
          </Container>
        </Col>
      </Row>

      <Row>
        <Col md={5} lg={5}>
          <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center">
              {car_photo ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={car_photo} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="car-photo-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="car-photo-upload"
                >
                  Upload an image                  
                </Form.Label>
              )}

              <Form.File
                id="car-photo-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={5}>
          <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center">
              {car_photo_1 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={car_photo_1} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="car-photo1-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="car-photo1-upload"
                >
                  Upload an image                  
                </Form.Label>
              )}

              <Form.File
                id="car-photo1-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={5}>
          <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center">
              {car_photo_2 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={car_photo_2} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="car-photo2-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="car-photo2-upload"
                >
                  Upload an image                  
                </Form.Label>
              )}

              <Form.File
                id="car-photo2-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={5}>
          <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center">
              {car_photo_3 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={car_photo_3} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="car-photo3-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="car-photo3-upload"
                >
                  Upload an image                  
                </Form.Label>
              )}

              <Form.File
                id="car-photo3-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={5}>
          <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center">
              {car_photo_4 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={car_photo_4} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="car-photo4-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="car-photo4-upload"
                >
                  Upload an image                  
                </Form.Label>
              )}

              <Form.File
                id="car-photo4-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={5}>
          <Container className={`${appStyles.Content} text-center`}>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
              create
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => {}}
            >
              cancel
            </Button>
          </Container>
        </Col>
        
      </Row>
    </Form>
    
  );
}

export default AdvertCreateForm;