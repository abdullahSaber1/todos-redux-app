import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home Page  <Link to="/todo">Go to your TODO List</Link>
        </div>

    );
};

export default Home;
