import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



import styles from "../../styles/AdvertCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function AdvertCreateForm() {
  const [errors, setErrors] = useState({});

  const [advertData, setAdvertData] = useState({
    car_title: "",
    make: "",
    model: "",
    year: "",
    condition: "New",
    chilometers: "",
    engine: "",
    transmission: "Manual",
    body_style: "Sedan",
    doors: "2",
    fuel_type: "Petrol",
    color: "",
    price: "",
    city: "Ardee",
    car_photo: "",
    car_photo_1: "",
    // car_photo_2: "",
    // car_photo_3: "",
    // car_photo_4: "",
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
    // car_photo_2,
    // car_photo_3,
    // car_photo_4,
    description
  } = advertData;
  
  const car_photoInput = useRef(null);
  const history = useHistory();

    const handleChange = (event) => {
      setAdvertData({
        ...advertData,
        [event.target.name]: event.target.value,
      });
    };

  const handleChangeImage = (event) => {

    if (event.target.id === 'car_photo-upload') {
      if (event.target.files.length) {
        URL.revokeObjectURL(car_photo);
        setAdvertData({
          ...advertData,
          car_photo: URL.createObjectURL(event.target.files[0]),
        });
      }
      
    } else if (event.target.id === 'car-photo1-upload') {
      URL.revokeObjectURL(car_photo_1);
      setAdvertData({
        ...advertData,
        car_photo_1: URL.createObjectURL(event.target.files[0]),
      });
    }
    // } else if (event.target.id === 'car-photo2-upload') {
    //   URL.revokeObjectURL(car_photo_2);
    //   setAdvertData({
    //     ...advertData,
    //     car_photo_2: URL.createObjectURL(event.target.files[0]),
    //   });
    // } else if (event.target.id === 'car-photo3-upload') {
    //   URL.revokeObjectURL(car_photo_3);
    //   setAdvertData({
    //     ...advertData,
    //     car_photo_3: URL.createObjectURL(event.target.files[0]),
    //   });
    // } else if (event.target.id === 'car-photo4-upload') {
    //   URL.revokeObjectURL(car_photo_4);
    //   setAdvertData({
    //     ...advertData,
    //     car_photo_4: URL.createObjectURL(event.target.files[0]),
    //   });
    // }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("car_title", car_title);
    formData.append("make", make);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("condition", condition);
    formData.append("chilometers", chilometers);
    formData.append("engine", engine);
    formData.append("transmission", transmission);
    formData.append("body_style", body_style);
    formData.append("doors", doors);
    formData.append("fuel_type", fuel_type);
    formData.append("color", color);
    formData.append("price", price);
    formData.append("city", city);
    formData.append("description", description);
    formData.append("car_photo", car_photoInput.current.files[0]);
    // formData.append("car_photo_1", car_photoInput.current.files[0]);
    // formData.append("car_photo_2", car_photoInput.current.files[0]);
    // formData.append("car_photo_3", car_photoInput.current.files[0]);
    // formData.append("car_photo_4", car_photoInput.current.files[0]);

    console.log(car_photoInput.current.files[0]);
    console.log(formData);
    try {
      const { data } = await axiosReq.post("/cars/", formData);
      // let url = "/cars/";
      // const { data } = await axiosReq.post(url, formData, {
      //   headers: {
      //     'content-type': 'multipart/form-data'
      //   }
      // });
      console.log(data);
      history.push(`/cars/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
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
          placeholder="Make model"
        />
      </Form.Group>
      {errors?.car_title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Make</Form.Label>
        <Form.Control
          type="text"
          name="make"
          value={make}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.make?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          name="model"
          value={model}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.model?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Year (oldest 2000)</Form.Label>
        <Form.Control
          type="number"
          name="year"
          value={year}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.year?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Condition</Form.Label>
        <Form.Control 
          as="select" 
          htmlSize={2} 
          custom
          name="condition"
          value={condition}
          onChange={handleChange}>
            <option>New</option>
            <option>Used</option>
        </Form.Control>
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
      {errors?.chilometers?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Engine (cc)</Form.Label>
        <Form.Control
          type="number"
          name="engine"
          value={engine}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.engine?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Transmission</Form.Label>
        <Form.Control 
          as="select" 
          htmlSize={2} 
          custom
          name="transmission"
          value={transmission}
          onChange={handleChange}>
          <option>Manual</option>
          <option>Automatic</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Body Style</Form.Label>
        <Form.Control 
          as="select"
          htmlSize={5} 
          custom
          type="text"
          name="body_style"
          value={body_style}
          onChange={handleChange}>
          <option>Sedan</option>
          <option>Coupe</option>
          <option>Sport car</option>
          <option>Station wagon</option>
          <option>Hatchback</option>
          <option>Convertible</option>
          <option>SUV</option>
          <option>Minivan</option>
          <option>Pickup Truck</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Doors</Form.Label>
        <Form.Control 
          as="select" 
          htmlSize={3} 
          custom
          name="doors"
          value={doors}
          onChange={handleChange}>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Fuel Type</Form.Label>
        <Form.Control 
          as="select" 
          htmlSize={3} 
          custom
          name="fuel_type"
          value={fuel_type}
          onChange={handleChange}>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </Form.Control>
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
      {errors?.color?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Price (euro)</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.price?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control 
          as="select" 
          htmlSize={5}
          custom
          name="city"
          value={city}
          onChange={handleChange}>
            <option>Ardee</option>
            <option>Arklow</option>
            <option>Athlone</option>
            <option>Athy</option>
            <option>Balbriggan</option>
            <option>Ballina</option>
            <option>Ballinasloe</option>
            <option>Ballybay</option>
            <option>Ballyshannon</option>
            <option>Bandon</option>
            <option>Bantry</option>
            <option>Belturbet</option>
            <option>Birr</option>
            <option>Boyle</option>
            <option>Bray</option>
            <option>Buncrana</option>
            <option>Bundoran</option>
            <option>Carlow</option>
            <option>Carrick-on-Suir</option>
            <option>Carrickmacross</option>
            <option>Cashel</option>
            <option>Castlebar</option>
            <option>Castleblayney</option>
            <option>Cavan</option>
            <option>Clonakilty</option>
            <option>Clones</option>
            <option>Clonmel</option>
            <option>Cobh</option>
            <option>Cootehill</option>
            <option>Cork</option>
            <option>Drogheda</option>
            <option>Dublin</option>
            <option>Dundalk</option>
            <option>Dungarvan</option>
            <option>Edenderry</option>
            <option>Ennis</option>
            <option>Enniscorthy</option>
            <option>Fermoy</option>
            <option>Galway</option>
            <option>Gorey</option>
            <option>Granard</option>
            <option>Greystones</option>
            <option>Kells</option>
            <option>Kilkee</option>
            <option>Kilkenny</option>
            <option>Killarney</option>
            <option>Kilrush</option>
            <option>Kinsale</option>
            <option>Leixlip</option>
            <option>Letterkenny</option>
            <option>Limerick</option>
            <option>Lismore</option>
            <option>Listowel</option>
            <option>Longford</option>
            <option>Loughrea</option>
            <option>Macroom</option>
            <option>Mallow</option>
            <option>Midleton</option>
            <option>Monaghan</option>
            <option>Mountmellick</option>
            <option>Muine Bheag</option>
            <option>Mullingar</option>
            <option>Naas</option>
            <option>Navan</option>
            <option>Nenagh</option>
            <option>New Ross</option>
            <option>Newbridge</option>
            <option>Passage West</option>
            <option>Portlaoise</option>
            <option>Shannon</option>
            <option>Skibbereen</option>
            <option>Sligo</option>
            <option>Templemore</option>
            <option>Thurles</option>
            <option>Tipperary</option>
            <option>Tralee</option>
            <option>Tramore</option>
            <option>Trim</option>
            <option>Tuam</option>
            <option>Tullamore</option>
            <option>Waterford</option>
            <option>Westport</option>
            <option>Wexford</option>
            <option>Wicklow</option>
            <option>Youghal</option>
        </Form.Control>
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
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      
    </div>
    
  );

  return (
    <Form onSubmit={handleSubmit}>
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
                      htmlFor="car_photo-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="car_photo-upload"
                >
                  Upload an image                  
                </Form.Label>
              )}

              <Form.File
                id="car_photo-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={car_photoInput}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>
      {/* <Row>
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
                ref={car_photoInput}
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
      </Row> */}
      <Row>
        <Col md={5} lg={5}>
          <Container className={`${appStyles.Content} text-center`}>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
              create
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
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