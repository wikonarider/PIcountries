import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, 
        orderBy,
        orderByActivity
     } from '../../redux/actions';

import styles from './Filters.module.css';
const Filters = () => {
    const dispatch = useDispatch();

    const activities = useSelector(state => state.allActivities)

    const handleOnContinent = (e) => {
    dispatch(filterByContinent(e.target.value))
    };

    const handleOnOrder = (e) => {
        dispatch(orderBy(e.target.value));
    };

    const handleOnActivity = (e) => {
        dispatch(orderByActivity(e.target.value));
    };

    return (
        <div className={styles.container}>
            <label>CONTINENT</label>
            <select className={styles.placeHolder} onChange={handleOnContinent} name="" id="">
                <option value="">-</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <label>ABC</label>
            <select className={styles.placeHolder} value onChange={handleOnOrder} name="order" id="">
                <option value="">-</option>
                <option value="ASC">A-Z</option>
                <option value="DES">Z-A</option>
            </select>
            <label>AREA</label>
            <select className={styles.placeHolder} value onChange={handleOnOrder} name="area" id="">
                <option value="">-</option>
                <option value="MAX">biggest</option>
                <option value="MIN">smaller</option>
            </select>
            <label>ACTIVITY</label>
            <select className={styles.placeHolder} onChange={handleOnActivity} name="activity" id="">
            <option value="">-</option>
                {
                   activities.map(a => (
                                <option key={a.id} value={a.name}>{a.name}</option>
                                ))
                }

            </select>
        </div>
    );
};

export default Filters;