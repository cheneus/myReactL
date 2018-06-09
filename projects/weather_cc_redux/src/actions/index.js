import API_KEY from "../config";
import axios from "axios";
import { FETCH_WEATHER } from "./type";

const apiUrl = `api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

const weatherAPI = city => {
  const url = `${apiUrl}&q=${city},us`;
  console.log(url);
  // return function(dispatch){
  console.log("inside get ", url);
     axios.get(`http://${url}`).then(res => {return res});
};

// const fetchWeather = (city) => {
//   const request =  weatherAPI(city);
//   console.log(request)
//   debugger
//   return {
//     type: FETCH_WEATHER,
//     payload: request
//   };
// };

export function fetchWeather(city) {
    const url = `${apiUrl}&q=${city},us`;
    const request = axios.get(`http://${url}`);
    return {
      type: FETCH_WEATHER,
      payload: request
    };
  }

export default fetchWeather;
