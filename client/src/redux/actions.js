import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const UNMOUNT_ALL_COUNTRIES = 'UNMOUNT_ALL_COUNTRIES';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const ORDER_COUNTRIES = 'ORDER_COUNTRIES';
export const ORDER_AREA = 'ORDER_AREA';
export const ORDER_ACTIVITY = 'ORDER_ACTIVITY';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';

export const getAllCountries = name => dispatch => {
    try {
        if(name){
            return axios.get(`/countries/?name=${name}`)
            .then(res => dispatch({ type: GET_ALL_COUNTRIES, payload: res.data }));
        }
        return axios.get('/countries')
            .then(res => dispatch({ type: GET_ALL_COUNTRIES, payload: res.data}));
    }catch(err){
        console.error(err);
    }
};

export const getCountry = cod => dispatch => {
    try {
        return axios.get(`/countries/${cod}`)
        .then(res => dispatch ({ type: GET_COUNTRY, payload: res.data }))
    }catch(err){
        console.error(err);
    }
};

export const createActivity = values => dispatch => {
    try {
        return axios.post('/activities/add', { ...values })
            .then(res => dispatch({ type: CREATE_ACTIVITY, payload: res.data }))
    }catch(err){
        console.error(err);
    }
};

export const filterByContinent = payload => {
    return {
        type: 'FILTER_BY_CONTINENT',
        payload
    }
};

export const orderBy = payload => {
    if(payload === "ASC" || payload === "DES"){
        return {
            type: 'ORDER_COUNTRIES',
            payload
        }
    }
    if(payload === "MAX" || payload === "MIN"){
        return {
            type:'ORDER_AREA',
            payload
        }
    }
};

export const orderByActivity = payload => {
    return {
        type: 'ORDER_ACTIVITY',
        payload
    }
}

export const getAllActivities = () => dispatch => {
    try {
        return axios.get('/activities')
            .then(res => dispatch({ type: GET_ALL_ACTIVITIES, payload: res.data}));
    }catch(err){
        console.error(err);
    }
}

export const unmountAllCountries = () => ({ type: UNMOUNT_ALL_COUNTRIES});