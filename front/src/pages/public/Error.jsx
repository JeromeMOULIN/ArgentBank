import React from 'react';

import './error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <main className='errorMain'>
            <p>404 <span>error</span> </p>
            <Link to='/'>Going back to home</Link>
        </main>
    );
};

export default Error;