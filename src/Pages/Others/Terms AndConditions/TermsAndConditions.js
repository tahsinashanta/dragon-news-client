import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Our Terms and Conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eos unde consequuntur, doloremque error omnis a laborum quam molestias repellendus consectetur quo totam deleniti voluptas vel, rerum provident! Eligendi, quaerat.</p>

            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates esse ea. Quo debitis quasi repellendus sint, qui eum, eligendi totam optio ratione, culpa magni possimus itaque exercitationem? Asperiores, nobis.</h5>
            
            <p>Go back to <Link to = "/register">Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;