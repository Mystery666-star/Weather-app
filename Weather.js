import React from "react";

const Weather=({data})=>{
    if (!data){
        return(
            <div>No data available!</div>
        )
    }

    return(
        <div className="Weather">
            <h2>{data.name}</h2>
            <p>Temperature:{data.main.temp}°C</p>
            <p>Humidity:{data.main.humidity}%</p>
            <p>Description:{data.weather[0].description}</p>
        </div>
    );
}
export default Weather;