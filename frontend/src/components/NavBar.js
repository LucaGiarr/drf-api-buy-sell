import {Navbar, Container, Nav} from "react-bootstrap"
import styles from "../styles/NavBar.module.css"
import { NavLink } from 'react-router-dom'
import { useCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from '../components/Avatar'

const NavBar = () => {

  const currentUser = useCurrentUser();

  const addAdvertIcon = (
    <NavLink 
    exact to="/advert/create" 
    className={styles.NavLink} 
    activeClassName={styles.Active}>
      Sell your car
    </NavLink>
  );

  const loggedInIcons = (
  <>
    <Avatar 
      src={currentUser?.profile_image}
      height={40}
    />
    {currentUser?.username}
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
                    <NavLink exact to="/" className={styles.NavLink} activeClassName={styles.Active}>Home</NavLink>

                    {/* to be re-styled */}
                    <NavLink 
                    exact to="/" 
                    className={styles.NavLink}>
                      {currentUser ? loggedInIcons : loggedOutIcons}
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
            {addAdvertIcon}
        </Container>
        
    </Navbar>

  )
}

export default NavBar
