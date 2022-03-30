import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Landing.module.css";

const Landing = () => {
  const history = useHistory();
  const handleOnClick = () => history.push("/main");

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <button className={styles.btn} onClick={handleOnClick}>
          COUNTRY ACTIVITIES
        </button>
      </div>
    </div>
  );
};

export default Landing;
