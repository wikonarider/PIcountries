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
      <div className={styles.title}>COUNTRY ACTIVITIES</div>
      <button onClick={refreshPage} className={styles.btn}>
        HOME
      </button>
      <button
        onClick={() => history.push("/main/create_activity")}
        className={styles.btn}
      >
        ADD ACTIVITY
      </button>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;
