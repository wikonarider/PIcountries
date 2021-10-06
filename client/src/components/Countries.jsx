import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import CountryCard from './CountryCard';

import Pagination from './Pagination';

const Countries = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const { countries } = useSelector(state => state);
    const from = parseInt(query.get('from')) || 0;
    return (
        <div>
            <Pagination />
            {
                countries &&
                countries.slice(from, from + 9).map(country => <CountryCard key={country.id} country={country} />)
            }
            <Pagination />
        </div>
    )
    // return countries.length ? Countries() : <div>Loading...</div>
};

export default Countries;