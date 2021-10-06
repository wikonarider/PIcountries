import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountry } from '../redux/actions';

import styles from './CountryCard.module.css'
const CountryCard = ({ country }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <img src={country.flag} alt={country.name} className={styles.img} />
            <NavLink onClick={() => {dispatch(getCountry(country.cod))}} className={styles.button} to={`/main/detail/:${country.cod}`}> <h4>{country.name}</h4> </NavLink>
            <p>{country.continent}</p>
        </div>
    );
};

export default CountryCard;