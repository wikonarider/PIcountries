import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import CountryCard from './CountryCard';
import Pagination from './Pagination';

import styles from './Countries.module.css';

const Countries = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const { countries } = useSelector(state => state);
    const from = parseInt(query.get('from')) || 0;
    return (
        <div className={styles.cnt}>
            <h4 className={styles.pag}><Pagination /></h4>
            <div className={styles.one}>
            { countries.length > 0 ?
                countries &&
                countries.slice(from, from + 9).map(country => <CountryCard key={country.id} country={country} />)
            : <span>Loading...</span>
            }
            </div>
            <h4><Pagination /></h4>
        </div>
    )
};

export default Countries;