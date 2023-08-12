import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import styles from "../styles/NavBar.module.css"
import { NavLink } from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar'
import axios from "axios";

const NavBar = () => {

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err)
    }
  }

  const addAdvertIcon = (
    <NavLink 
    exact to="/advert/create" 
    className={styles.NavLink}
    activeClassName={styles.Active}
    >
      Sell your car
    </NavLink>
  );

  const loggedInIcons = (
  <>
    <NavLink
      to="/profile"
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      <Avatar
        src={currentUser?.profile_image}
        height={50}
      />
      {currentUser?.username}
    </NavLink>
    
    <NavLink
      to="/"
      className={styles.NavLink}
      onClick={handleSignOut}
    >
      Sign Out
    </NavLink>
  </>
  );

  const loggedOutIcons = (
    <>
      <Nav className="ml-auto text-center">
        <NavLink exact to="/signin" className={styles.NavLink} activeClassName={styles.Active}>Sign In</NavLink>
        <NavLink exact to="/signup" className={styles.NavLink} activeClassName={styles.Active}>Sign Up</NavLink>
      </Nav>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top'>
        <Container>
          <NavLink to="/" className={styles.NavLink}>
            <Navbar.Brand>Buy & Sell cars LOGO</Navbar.Brand>
          </NavLink>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-center">
                    <NavLink 
                      exact to="/" 
                      className={styles.NavLink}
                      activeClassName={styles.Active}
                    >
                      Home
                    </NavLink>

                    {currentUser ? loggedInIcons : loggedOutIcons}

                    {addAdvertIcon}
                </Nav>
            </Navbar.Collapse>
            
        </Container>
        
    </Navbar>

  )
}

export default NavBar
