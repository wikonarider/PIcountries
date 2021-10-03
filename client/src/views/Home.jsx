import React from 'react';

import Countries from '../components/Countries';
import Filters from '../components/Filters/Filters';

const Home = () => {
    return (
        <div>
            <Filters />
            <Countries />
        </div>
    )
};

export default Home;