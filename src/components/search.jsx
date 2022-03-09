import { useState } from 'react';
import Card from './card';
import "./css/search.css";
import { FaSearchLocation } from "react-icons/fa"

function Search() {
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState({}); 
    

   const callAPI = (city) => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=4e41ea2d64c54d72aae125652222302&q=${city}&days=3&aqi=no&alerts=no`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      setWeatherInfo(data)
    })
   }



   const handleCity = (event) => {
        setCity(event.target.value)
   }


    return (
        <>
        <div className="search">
            <input 
                className="search-inp" 
                type="text"
                placeholder="Enter a city"  
                value={city} 
                onChange={handleCity}    
            />
            <button className="search-btn" onClick={() => callAPI(city)}><FaSearchLocation style={{color:"#013c82", width:"20px", height:"20px"}}/></button>
        </div>
        <Card weatherInfo= {weatherInfo}/>
        </>

    )
}


export default Search;