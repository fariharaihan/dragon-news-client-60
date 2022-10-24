import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>This is terms and conditions</h3>
            <p>Go back to: <Link to='/signup'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;