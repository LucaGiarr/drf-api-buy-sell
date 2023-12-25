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

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";


function CarsPage({ message, filter = "" }) {
  
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
        console.log(err);
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
      <Col className="py-2 p-0 p-lg-2">
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
                  <Car key={car.id} {...car} setCars={setCars} />
                  
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

  // return (
  //   <Container fluid className={appStyles.Content}>
  //     <Row>
  //       <Col xs={12} md={3} className="py-2">
  //         <i className={`fas fa-search ${styles.SearchIcon}`} />
  //         <Form
  //           className={styles.SearchBar}
  //           onSubmit={(event) => event.preventDefault()}
  //         >
  //           <Form.Control
  //             value={query}
  //             onChange={(event) => setQuery(event.target.value)}
  //             type="text"
  //             placeholder="Search cars"
  //           />
  //         </Form>
  //       </Col>

  //       <Col xs={12} md={9} className="py-2">
  //         {hasLoaded ? (
  //           <>
  //             {cars.results.length ? (
  //               <InfiniteScroll
  //                 children={cars.results.map((car) => (
  //                   <Car key={car.id} {...car} setCars={setCars} />
  //                 ))}
  //                 dataLength={cars.results.length}
  //                 loader={<Asset spinner />}
  //                 hasMore={!!cars.next}
  //                 next={() => fetchMoreData(cars, setCars)}
  //               />
  //             ) : (
  //               <p>No results found. Please adjust the search keyword and try again.</p>
  //             )}
  //           </>
  //         ) : (
  //           <Asset spinner />
  //         )}
  //       </Col>
  //     </Row>
  //   </Container>
  // );

}

export default CarsPage;
