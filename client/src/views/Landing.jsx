import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Landing.module.css";

const Landing = () => {
  const history = useHistory();
  const handleOnClick = () => history.push("/main");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>COUNTRIES AND THEIR ACTIVITIES </h1>
        </div>
          <div className={styles.text}>
        <p> Web development of a SPA using React for Front End, Redux as state
            management and styles with pure CSS. <br/> 
            In Back End Express
            and relational database. <br/>
            Some features: search for countries, filtering according their
            properties, country cards of details, add tourist activities for
            the country.</p>
          </div>
        <button className={styles.button} onClick={handleOnClick}>
          Ingresar ahora
        </button>
      </div>
  );
};

export default Landing;
