import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "./SearchBar";

const Nav = () => {
  const history = useHistory();

  function refreshPage() {
    history.push("/main");
    window.location.reload(false);
  }

  return (
    <div className={styles.cnt}>
      <div className={styles.title}>
        <h1> COUNTRIES <br/> </h1> <h3 className={styles.titlespan}> AND THEIR ACTIVITIES </h3>
        </div>
        <div className={styles.section}>
      <button onClick={refreshPage} className={styles.btn}>
        HOME
      </button>
      <button
        onClick={() => history.push("/main/create_activity")}
        className={styles.btn}
        >
        ADD ACTIVITY
      </button>
        </div>
        <SearchBar />
    </div>
  );
};

export default Nav;
