export const initialState = {
    term: 'Lagos',
    location:null,
    lon: -122.08,
    lat: 37.39
};

export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
    SET_LON: 'SET_LON',
    SET_LAT:'SET_LAT'
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        case actionTypes.SET_LOCATION:
            return {
                ...state,
                location: action.location
            }
            case actionTypes.SET_LON:
                return {
                    ...state,
                    lon: action.lon
            }
            case actionTypes.SET_LAT:
                return {
                    ...state,
                    lat: action.lat
                }
            default:
                return state;
    }
};

export default reducer;
