import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Nav.module.css'
import SearchBar from './SearchBar';

const Nav = () => {
    const history = useHistory()

    function refreshPage() {
        history.push('/main')
        window.location.reload(false);
    }

    return (
        <div className={styles.cnt}>
            <div>LOGO</div>
            <button onClick={refreshPage}>Home</button>
            <button onClick={() => history.push('/main/create_activity')}>Add Activity</button>
            <div>
            < SearchBar />
            </div>
        </div>
    );
};

export default Nav;