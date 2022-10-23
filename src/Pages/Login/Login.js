import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';



const Login = () => {
  const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation(); 
    const from = location?.state?.from?.pathname || "/"
    const {signIn, setLoading} = useContext(AuthContext)

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset();
            setError('');

            if(user.emailVerified){
              navigate(from, {replace: true})
            }
            else {
              toast.error('Your email is not verified. Please verify it first!')
            }
        })
        .catch(error => {
            console.error (error)
            setError(error.message)
        })
        .finally( () => {
          setLoading(false)
        })
    }

    return (
        <div>
            <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name = "email" required type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name = "password" required type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <Form.Text className="text-danger">
        <p>{error}</p>
        </Form.Text>
    </Form>
        </div>
    );
};

export default Login;