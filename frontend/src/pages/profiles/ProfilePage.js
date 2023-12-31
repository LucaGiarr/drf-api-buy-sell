import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";

import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";

import { Image } from "react-bootstrap";
import CarInfoCarsPage from "../cars/CarInfoCarsPage";
import { ProfileEditButton } from "../../components/MoreButtons";


function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileCars, setProfileCars] = useState({ results: [] });
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileCars }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/cars/?owner__profile=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileCars(profileCars);
        setHasLoaded(true);
      } catch (err) {
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner}
      <Row noGutters className="text-center">
        <Col lg={3} className="text-lg-left">
          <Image
          className={styles.profile_image}
          src={profile?.image}
          />
          
        </Col>
        <Col lg={7}>
          <h3 className={styles.owner_name}>{profile?.owner}</h3>
          {profile?.is_owner ? (
            <ProfileEditButton id={profile?.id} />
          ) : (
            <></>
          )}
          
          <Row className="justify-content-center no-gutters">
            <Col xs={12} className="my-2">
              <span>Cars for sale: {profile?.cars_count}</span>
            </Col>
          </Row>
          <Row className="justify-content-center no-gutters">
            <Col xs={12} className="my-2">
              <span>Contact me: {profile?.email}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );

  const mainProfileCars = (
    <>
      <hr />
      <h3 className="text-center">{profile?.owner}'s cars</h3>
      <hr />
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2">
          {profileCars.results.length ? (
            <InfiniteScroll
              children={profileCars.results.map((car) => (
                <CarInfoCarsPage key={car.id} {...car} setCars={setProfileCars} />
              ))}
              dataLength={profileCars.results.length}
              loader={<Asset spinner />}
              hasMore={!!profileCars.next}
              next={() => fetchMoreData(profileCars, setProfileCars)}
            />
          ) : (
            <p className="text-center">{profile?.owner} has no cars yet.</p>
          )}
        </Col>
      </Row>
    </>
  );

  return (
    <>
      {hasLoaded ? (
        <>
        <Container>
          {mainProfile}
        </Container>

        <Container>
          {mainProfileCars}
        </Container>
          
        </>
      ) : (
        <Asset spinner />
      )}
    </>
    
  );
}

export default ProfilePage;
