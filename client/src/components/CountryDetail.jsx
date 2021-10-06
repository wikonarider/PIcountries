import React from "react";
import { useSelector } from "react-redux";
import styles from './CountryDetail.module.css'

const CountryDetail = () => {
    const {country} = useSelector(state => state);
    console.log("SHOW ACTIVITIES", country);

    while(country === undefined) {
    
    }

    const ActivityComponent = () => {
        return(
        <div>
                <p className={styles.p}>Activities: {country.activities[0] !== undefined ? country.activities[0].name : ""}</p>
                <p className={styles.p}>Difficulty: {country.activities[0] !== undefined ? country.activities[0].difficulty : ""}</p>
                <p className={styles.p}>Duration: {country.activities[0] !== undefined ? country.activities[0].duration : ""}</p>
                <p className={styles.p}>Season: {country.activities[0] !== undefined ? country.activities[0].season : ""}</p>
        </div>
        )
    }
        
        const DetailComponent = () => (

                <div className={styles.wrapper}>
                <div className={styles.card}>
                <img src={country.flag} alt={country.name} className={styles.img} />
                <div className={styles.info}>
                <div className={styles.info1}>
                <h1 className={styles.h1}>{country.name}</h1>
                <p className={styles.p}>{country.cod}</p>
                <p className={styles.p}>Capital: {country.capital}</p>
                <p className={styles.p}>Continent: {country.continent}</p>
                <p className={styles.p}>Area: {country.area}</p>
                {country.activities[0] !== undefined ? <ActivityComponent/> : <p className={styles.p}>Activities: No activities yet </p>}
                    </div>
                </div>
            </div>
        </div>
    );
    return country === undefined ? <div>Loading...</div> : DetailComponent();
};

export default CountryDetail;