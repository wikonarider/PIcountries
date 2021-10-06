import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

const Pagination = () => {
    const query = new URLSearchParams(useLocation().search.slice(1));
    const history = useHistory();
    const name = query.get('name');
    const { countries } = useSelector(state => state);
    const arr = Array(Math.ceil(countries.length / 9)).fill(0)
    return (
        <div>
            {
                arr.length > 1 && arr.map((el, index) => index).map(el => (
                <button key={el} onClick={() => history.push(`/main?name=${name ? name : ''}&from=${ el *9}`)}>{ el + 1 }</button>
                ))
            }
        </div>
    );
};

export default Pagination;