import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createActivity } from "../../redux/actions";


import styles from './CreateActivity.module.css';
const CreateActivity = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    // console.log("PAÍSES", countries);

    const [ values, setValues ] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: [],
    });

    const [input, setInput] = useState({
        inputCountries: []
    }) 

    const handleOnChange = ({ target: { name, value } }) => setValues ({
        ...values,
        [name]:value,
    });

    function handleSelect(e) {
        setValues({
          ...values,
          country: [...values.country, e.target.value],
        });
        console.log(e.target.value)
      }

    

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log("VALORES", values)
        dispatch(createActivity(values));

        setValues({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            country: [],
        });
        alert('Activity created!')
    };

    return (
        <form className={styles.ctn} onSubmit={handleOnSubmit}>
          <div className={styles.card}>
            <div className={styles.font}>
            <label>ACTIVITY:</label>
            <input className={styles.input} name='name' onChange={handleOnChange} type='text' value={values.name} placeholder='write here your turist activity!' required/>
            </div>
            <div className={styles.font}>
            <label htmlFor="">DIFFICULTY:</label>
            <select name='difficulty' onChange={handleOnChange} value={values.difficulty} required>
                <option>-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>
            <div className={styles.font}>
            <label>DURATION:</label>
            <input name='duration' onChange={handleOnChange} values={values.name} placeholder="Activity duration 00:00" required/>
            </div>
            <div className={styles.font}>
            <label>SEASON:</label>
            <select name='season' onChange={handleOnChange} value={values.season} required>
                <option>-</option>
                <option value="summer">summer</option>
                <option value="autumn">autumn</option>
                <option value="winter">winter</option>
                <option value="spring">spring</option>
            </select>
            </div>
            <div className={styles.font}>
            <label>COUNTRY:</label>
            <div>
            <select onChange={(e) => handleSelect(e)} value={input.inputCountries[input.inputCountries.length - 1]} className required>
              <option value="">Select Country:</option>
              {countries.map((e) => (<option key={e.id} value={e.name}> {e.name} </option>
              ))}
            </select>
            <div>
              {[
                values.country.map(
                  (i) => countries.find((ob) => ob.name === i)?.name + ", "
                ),
              ]}
            </div>
            </div>
          </div>
            <button className={styles.btn}>ADD YOUR ACTIVITY</button>
          </div>
        </form>      
    );
};

export default CreateActivity;