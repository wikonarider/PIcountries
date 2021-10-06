import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory  } from 'react-router';
import { getAllCountries } from '../redux/actions';

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
            <input onChange={({ target: {value} }) => setName(value)} value={name} type='text' placeholder='country name...'></input> 
            <button onSubmit={handleOnClick}>Search</button>
        </div>
    );
};

export default SearchBar;