import React, { useContext, useState } from 'react';
import {Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {

  const [error, setError] = useState('')
  const [accepted, setAccepted] = useState(false);

    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError("");
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
            toast.success('Please Verify Your Email Address! Check your Email Right Now! ')
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    const handleAccepted = event => {
      setAccepted(event.target.checked);

    }

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name, 
        photoURL : photoURL
      }
      updateUserProfile(profile)
      .then( () => {

      })
      .catch(error => {
        console.error(error)
      })
    }


    const handleEmailVerification = () => {
      verifyEmail()
      .then( () => {
      })
      
      .catch(error => {
        console.error(error)
      })
    }
  


    return (
        <div>
            <Form onSubmit = {handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name = "name" type= "text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control name = "photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required name = "email" type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required name = "password" type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        onClick = {handleAccepted}
        label={<>Accept <Link to = '/terms'>Terms and Conditions</Link></>} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled = {!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger d-block">
       <p>{error}</p>
        </Form.Text>
    </Form>
        </div>
    );
};

export default Register;