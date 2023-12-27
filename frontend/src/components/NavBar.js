import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import Logo from "../images/Logo.png";

const NavBar = () => {

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    const shouldSignOut = window.confirm('Are you sure you want to Sign Out?');
    if (shouldSignOut) {
      try {
        await axios.post("/dj-rest-auth/logout/");
        setCurrentUser(null);
        removeTokenTimestamp();
      } catch (err) {
      }
    }
  }

  const loggedInIcons = (
  <>
    <NavLink
      to={`/profiles/${currentUser?.profile_id}`}
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

    <NavLink 
      exact to="/cars/create" 
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      Sell your car
    </NavLink>
  </>
  );

  const loggedOutIcons = (
    <>
        <NavLink exact to="/signin" className={styles.NavLink} activeClassName={styles.Active}>Sign In</NavLink>
        <NavLink exact to="/signup" className={styles.NavLink} activeClassName={styles.Active}>Sign Up</NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed='top'>
        <Container>
          <NavLink to="/" className={styles.NavLink}>
          <img 
              src={Logo} 
              alt="Buy & Sell cars LOGO" 
              className={styles.logo_img}
              />
          </NavLink>
            
            <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav"/>
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
                </Nav>
            </Navbar.Collapse> 
        </Container>  
    </Navbar>

  )
}

export default NavBar
