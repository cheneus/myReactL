import FETCH_WEATHER from "../actions/type";
console.log(FETCH_WEATHER)
// export default (state = [], action) => {
//   switch (action.type) {
      
//     // case FETCH_WEATHER_PENDING:
//     //   console.log("reducer_pending", action.payload);
//     //   // return state.concat([action.payload.data]); // making a new instance of state
//     //   return [action.payload.data, ...state];
//     case "FETCH_WEATHER":
//     console.log(action.payload)
//       console.log("reducer", action.payload.data);
//       return state.concat([action.payload.data]); // making a new instance of state
//     //   return [action.payload, ...state];
//     default:
//     console.log(typeof action.type)
//       return state;
//   }
// };

// import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
    console.log(action.payload)
      return [action.payload.data, ...state];
  }
  return state;
}
