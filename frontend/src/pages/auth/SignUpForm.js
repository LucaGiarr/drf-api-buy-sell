import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";


const SignUpForm = () => {
  useRedirect('loggedIn')
  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: ''
  })
  const {username, password1, password2} = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await axios.post('/dj-rest-auth/registration/', signUpData);
      history.push('/signin');
    } catch (err){
      setErrors(err.response?.data)
    }
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Row>
      <Col className="mt-5 mx-auto py-2 p-md-2" lg={6} md={8}>

        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
          
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
            
            <Form.Group controlId="password1">
							<Form.Label>Password</Form.Label>
							<Form.Control 
                type="password" 
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message,idx) => 
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Form.Group controlId="password2">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control 
                type="password" 
                placeholder="Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message,idx) => 
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
							Sign Up
            </Button>
            {errors.non_field_errors?.map((message,idx) => 
              <Alert variant="warning" key={idx} className="mt-3">{message}</Alert>
            )}
					</Form>
        </Container>

        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col> 
    </Row>
  );
};

export default SignUpForm;