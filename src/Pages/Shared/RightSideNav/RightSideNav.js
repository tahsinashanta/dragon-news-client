import { Dropdown } from 'bootstrap';
import React, { useContext } from 'react';
import { DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub , FaFacebook, FaTwitter, FaWhatsapp, FaTelegram, FaAmazon } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Log in with Google </Button>
                <Button className='mb-2' variant="outline-dark"> <FaGithub></FaGithub> Log in with Github</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item  className='mb-3'> <FaTwitter/> Twitter </ListGroup.Item>
                    <ListGroup.Item  className='mb-3'> <FaWhatsapp></FaWhatsapp> WhatsApp </ListGroup.Item>
                    <ListGroup.Item  className='mb-3'> <FaTelegram/> Telegram </ListGroup.Item>
                    <ListGroup.Item  className='mb-3'> <FaAmazon/> Amazon </ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;