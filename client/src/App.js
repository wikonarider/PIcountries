// import './App.css';
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import { useEffect } from "react";
import {
  getAllActivities,
  getAllCountries,
  unmountAllCountries,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
    return () => {
      dispatch(unmountAllCountries());
    };
  }, [dispatch]);

  // ATENCIÓN A PARTIR DE LA VERSIÓN 6.0 NO ES MÁS ROUTER ES ROUTES
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;

// INSTALACIONES
// npm i redux redux-thunk react-redux react-router-dom axios
// redux-devtools-extension
