import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountry } from '../redux/actions';

import styles from './CountryCard.module.css'
const CountryCard = ({ country }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
            <img src={country.flag} alt={country.name} className={styles.img} />
            <div className={styles.info}>
                <div className={styles.info1}>
                    <NavLink onClick={() => {dispatch(getCountry(country.cod))}} className={styles.button} to={`/main/detail/:${country.cod}`}> <h1 className={styles.h1}>{country.name}</h1> </NavLink>
                    <p className={styles.p}>{country.cod}</p>
                    <p className={styles.p}>{country.continent}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CountryCard;