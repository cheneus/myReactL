import FETCH_WEATHER from '../actions/type'

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]); // making a new instance of state 
            return [action.payload.data, ...state]
    }
return state
}