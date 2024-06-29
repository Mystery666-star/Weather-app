import React, {useState} from "react";

const SearchBar =({fetchWeather})=>{
    const [city, setCity] = useState('');

const HandleSearch=()=>{
     fetchWeather(city);
}

return(
    <div className="SearchBar">
        <input 
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter the name of the city"
        ></input>
        <button onClick={HandleSearch}>Search</button>

    </div>
)}

export default SearchBar;
