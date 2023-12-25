import React from "react";
import styles from "../../styles/CarDetailsSection.module.css";
import { Container, Row, Table, Col } from "react-bootstrap";

const Car = (props) => {
  const {
    // id,
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
    description,
  } = props;

  return (
    <>
    <h4 className={styles.title_section}>
        Car Details
    </h4>
    <Container>
    <Table>
      <tbody>
          <tr>
          <td><strong>{condition}</strong></td>
          <td><strong>{year}</strong></td>
          <td><strong>{engine} cc</strong></td>
          <td><strong>{fuel_type}</strong></td>
          </tr>
          <tr>
          <td><strong>{transmission}</strong></td>
          <td><strong>{chilometers} km</strong></td>
          <td><strong>{body_style}</strong></td>
          <td><strong>{doors} doors</strong></td>
          </tr>
      </tbody>
      </Table>
    </Container>

    <hr></hr>

    <h4 className={styles.title_section}>
      Description
    </h4>
    <Container>
      <p className={styles.description}>
        {description}
      </p>
    </Container>

    <hr></hr>

    <h4 className={styles.title_section}>
        Vehicle History
    </h4>
    <Container>
      <Row>
        <Col>
          <Table>
          <tbody>
              <tr>
              <td><strong>Make: </strong>{make}</td>
              <td><strong>Fuel Type: </strong>{fuel_type}</td>
              </tr>
              <tr>
                <td><strong>Model: </strong>{model}</td>
                <td><strong>Condition: </strong>{condition}</td>
              </tr>
              <tr>
                <td><strong>Body Style: </strong>{body_style}</td>
                <td><strong>Mileage: </strong>{chilometers} km</td>
              </tr>
              <tr>
                <td><strong>Transmission: </strong>{transmission}</td>
                <td><strong>Year: </strong>{year}</td>
              </tr>
          </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

    </>

  )
};

export default Car;