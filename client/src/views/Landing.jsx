import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Landing.module.css';

const Landing = () => {
    const history = useHistory()
    const handleOnClick = () => history.push('/main')

    return (
        <body className={styles.wrapper}>
        <div className={styles.ctn}>
            <button className={styles.btn} onClick={handleOnClick}>
                COUNTRY ACTIVITIES
            </button>
        </div>
        </body>
    )
};

export default Landing;