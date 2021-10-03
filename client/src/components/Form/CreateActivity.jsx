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

    const handleOnChange = ({ target: { name, value } }) => setValues ({
        ...values,
        [name]:value,
    });

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
            <select name='country' onChange={handleOnChange} value={values.country} required>
            {
            countries.map(country => <option key={country.id} value={country.name}>{country.name}</option>)
            }
            </select>
            <button>Add</button>
        </form>
    );
};

export default CreateActivity;