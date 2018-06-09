import React, {Component} from 'react'
import {connect} from 'react-redux'

class WeatherList extends Component {
    renderWeather = (cityData) => {
        const name = cityData.city.name;
        // this.props.weather.map(cityData => 
            return (
                <tr key={name}>
                <td>{cityData.city.name}</td>
            </tr>
            )

            
        // )
        
    }

    render() {
        return( 
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.renderWeather} */}
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

// const mapStateToProps =({weather}) => {
//     return {weather}
// }

export default connect(mapStateToProps)(WeatherList)