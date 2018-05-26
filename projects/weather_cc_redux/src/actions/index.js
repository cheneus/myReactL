import API_KEY from '../config'
import axios from 'axios'
import FETCH_WEATHER from './type'

const apiUrl = `api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`

const fetchWeather = (city) => {

    const url = `${apiUrl}&q=${city},us`;
    console.log(url)
const request = axios.get(`http://${url}`)
    // .then(res => {
    //     return res
    //     console.log('res')
    // })
    // .catch(err => {
    //     console.log(error)
    //     console.log(err)
    // }) 
    console.log('Request: ',request)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export default fetchWeather