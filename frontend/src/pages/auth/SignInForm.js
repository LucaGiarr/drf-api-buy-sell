import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

import { useRedirect } from "../../hooks/useRedirect";

const SignInForm = () => {

  const setCurrentUser = useSetCurrentUser();
  useRedirect('loggedIn')

  const [signInData, setSignInData] = useState({
    username: '',
    password: ''
  })
  const {username, password} = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const { data } = await axios.post('/dj-rest-auth/login/', signInData);
      setCurrentUser(data.user);
      history.goBack();
    } catch (err){
      setErrors(err.response?.data)
    }
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Row>
      <Col className="mt-5 mx-auto py-2 p-md-2" lg={6} md={8}>

        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Username" 
              name="username"
              value={username}
              onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message,idx) => 
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}
            
            <Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control 
                type="password" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message,idx) => 
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
                Sign In
            </Button>
            {errors.non_field_errors?.map((message,idx) => 
              <Alert variant="warning" key={idx} className="mt-3">{message}</Alert>
            )}
					</Form>

        </Container>

        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign Up</span>
          </Link>
        </Container>
        
      </Col>
      
    </Row>
  );
};

export default SignInForm;