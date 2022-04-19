import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory  } from 'react-router';
import { getAllCountries } from '../redux/actions';

import { BiSearch } from 'react-icons/bi';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    const history = useHistory();
    const [ name, setName ] = useState('');
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(getAllCountries(name));
        setName('');
        history.push(`/main?name=${name}`);
    };
    const handleChange = (e) => {
        setName(e.target.value)
        dispatch(getAllCountries(name));
    };
    return(
        <div className={styles.container}>
            <input className={styles.input}  type='text' onChange={(e) => handleChange(e)} value={name} placeholder='Country name...'></input> 
            <button  className={styles.searchButton} onClick={handleOnClick}> <BiSearch/> </button>
        </div>
    );
};

export default SearchBar;

// ({ target: {value} }) => setName(value)