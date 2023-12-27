import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import {Route,Switch } from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import CarCreateForm from './pages/cars/CarCreateForm';
import CarPage from './pages/cars/CarPage';
import CarsPage from './pages/cars/CarsPage';
import CarInfoCarsPage from './pages/cars/CarInfoCarsPage';
import CarEditForm from './pages/cars/CarEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from './pages/profiles/UserPasswordForm';
import ProfileEditForm from './pages/profiles/ProfileEditForm';

import NotFoundPage from './pages/other/NotFoundPage';




function App() {
  
  return (
    
    <div className = {styles.App} >
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => (<CarsPage message="No results found.Adjust the search keyword." />)} />
          <Route exact path="/car" render={() => <CarInfoCarsPage />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/cars/create" render={() => <CarCreateForm />} />
          <Route exact path="/cars/:id" render={() => <CarPage />} />
          <Route exact path="/cars/:id/edit" render={() => <CarEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
          <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
          <Route exact path="/profiles/:id/edit/" render={() => <ProfileEditForm />} />

          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;