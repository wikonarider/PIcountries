import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {

    return (
        <div>
            <img src={country.flag} alt={country.name} style={{ width: '200px', height: '200px' }} />
            <Link to={`/countries/detail/:${country.id}`}> <h4>{ country.name }</h4> </Link>
            <p>{country.continent}</p>
        </div>
    );
};

export default CountryCard;