import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createActivity } from "../../redux/actions";

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
        <form onSubmit={handleOnSubmit}>
            <label>Activity:</label>
            <input name='name' onChange={handleOnChange} type='text' value={values.name} placeholder='write here your turist activity!' required/>
            <label htmlFor="">Difficulty:</label>
            <select name='difficulty' onChange={handleOnChange} value={values.difficulty} required>
                <option>-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <label>Duration:</label>
            <input name='duration' onChange={handleOnChange} values={values.name} placeholder="Activity duration 00:00" required/>
            <label>Season:</label>
            <select name='season' onChange={handleOnChange} value={values.season} required>
                <option>-</option>
                <option value="summer">summer</option>
                <option value="autumn">autumn</option>
                <option value="winter">winter</option>
                <option value="spring">spring</option>
            </select>
            <label>Country:</label>
            {/* <select name='country' onChange={handleOnChange} value={values.country} required>
            {
            countries.map(country => <option key={country.id} value={country.name}>{country.name}</option>)
            }
            </select> */}
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
            <button>Add</button>
        </form>
    );
};

export default CreateActivity;