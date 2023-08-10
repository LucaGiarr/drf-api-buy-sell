import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top'>
        <Container>
            <Navbar.Brand>Buy & Sell cars LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-center">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Sign In</Nav.Link>
                    <Nav.Link>Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        
    </Navbar>

  )
}

export default NavBar
