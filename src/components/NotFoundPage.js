import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - The page you are looking for does not exist <br/>
        <Link to="/">Go to home page</Link>
    </div>
);

export default NotFoundPage;