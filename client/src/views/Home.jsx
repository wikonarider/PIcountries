import React from "react";

import Countries from "../components/Countries";
import Filters from "../components/Filters/Filters";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Filters />
      <Countries />
    </div>
  );
};

export default Home;
