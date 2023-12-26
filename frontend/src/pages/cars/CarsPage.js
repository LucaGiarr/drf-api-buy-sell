import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import CarInfoCarsPage from "./CarInfoCarsPage";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/CarsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";


function CarsPage({ filter = "" }) {
  
  const [cars, setCars] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axiosReq.get(`/cars/?${filter}search=${query}`);
        setCars(data);
        setHasLoaded(true);
      } catch (err) {
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchCars();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className={`py-2 p-0 p-lg-2 ${styles.customCol}`}>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search cars"
          />
        </Form>

        {hasLoaded ? (
          <>
            {cars.results.length ? (
              <InfiniteScroll
                children={cars.results.map((car) => (
                  <CarInfoCarsPage key={car.id} {...car} setCars={setCars} />                  
                ))}
                dataLength={cars.results.length}
                loader={<Asset spinner />}
                hasMore={!!cars.next}
                next={() => fetchMoreData(cars, setCars)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <p>No results found. Please adjust the search keyword and try again.</p>
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
