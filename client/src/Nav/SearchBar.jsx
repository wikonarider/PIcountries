import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory  } from 'react-router';
import { getAllCountries } from '../redux/actions';

import styles from './Nav.module.css';

const SearchBar = () => {
    const history = useHistory();
    const [ name, setName ] = useState('');
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(getAllCountries(name));
        setName('');
        history.push(`/main?name=${name}`);
    };


    return(
        <div>
            <button onClick={handleOnClick} className={styles.btn}>SEARCH</button>
            <input onChange={({ target: {value} }) => setName(value)} value={name} type='text' placeholder='country name...' className={styles.input}></input> 
        </div>
    );
};

export default SearchBar;