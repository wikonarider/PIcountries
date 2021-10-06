import { 
    GET_ALL_COUNTRIES,
    GET_COUNTRY,
    CREATE_ACTIVITY,
    UNMOUNT_ALL_COUNTRIES,
    FILTER_BY_CONTINENT,
    ORDER_COUNTRIES,
    ORDER_AREA,
    ORDER_ACTIVITY,
    GET_ALL_ACTIVITIES
} from "./actions";

const initialState = {
    allCountries:[],
    countries: [],
    country: {activities: []},
    allActivities: [],
    activity: {},
};

const rootReducer = (state = initialState, { payload, type, order }) => {
    switch(type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries:  payload,    //  CHEQUEAR STATES
                allCountries: payload   
            };
        case GET_COUNTRY:
            return {
                ...state,
                country: payload,
            };
        case CREATE_ACTIVITY:
            return {
                ...state,
                allActivities: state.allActivities.concat(payload),
                activity: payload
            };
        case UNMOUNT_ALL_COUNTRIES:
            return {
                ...state,
                countries: [],
            };
        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: state.allCountries.filter(country => country.continent === payload),
            };
        case ORDER_COUNTRIES:
            return {
                ...state,
                countries: (payload === 'ASC') ? 
                state.countries.sort(function (a, b) {
               return a.name.localeCompare(b.name)
                }) :
                state.countries.sort(function(a, b) {
               return b.name.localeCompare(a.name)
            })
            };
        case ORDER_AREA:
            let sortedArea = (payload === 'MAX') ? 
            state.countries.sort(function (a, b) {
                if (a.area > b.area) {
                    return -1;
                }
                if(b.area > a.area) {
                    return 1
                }
                return 0;
            }) :
            state.countries.sort(function(a, b) {
                if (a.area > b.area) {
                    return 1;
                }
                if (b.area > a.area) {
                    return -1
                }
                return 0;

            });
            return {
                ...state,
                countries: sortedArea
            };
        case ORDER_ACTIVITY:
            let countriesWithActivity = state.allCountries;
            countriesWithActivity = countriesWithActivity.filter(c => c.activities[0] !== undefined)
            return {
                ...state,
                countries: countriesWithActivity.filter(country => country.activities[0].name === payload)
            };
            case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: payload
            }

        default: 
        return state;
    }
};

export default rootReducer;