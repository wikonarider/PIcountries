import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CountryCard from './CountryCard';
import { getAllCountries, unmountAllCountries } from '../redux/actions';

const Countries = () => {
    const dispatch = useDispatch();
    const { countries } = useSelector(state => state);

    // useEffect(() => {
    //     dispatch(getAllCountries());
    //     return () => {
    //         dispatch(unmountAllCountries());
    //     };
    // }, [ dispatch ]);

    return (
        <div>
            {
                countries &&
                countries.map(country => <CountryCard key={country.id} country={country} />)
            }

        </div>
    )
    // return countries.length ? Countries() : <div>Loading...</div>
};

export default Countries;