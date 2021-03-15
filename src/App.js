import React, { useEffect, useState } from 'react';
import './App.scss';
import Search from './Components/Search/Search';


function App() {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=8fe82683aee54cd58ce190541211203&q=${city}&days=3`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherInfo(data)
      })
  }, [city])



  function handlerOnChange(event) {
    console.warn(event.target.value);
    setSearch(event.target.value);
  }


  function handlerOnKeyDown(event) {
    return event.keyCode === 13 && search.length > 1 ? setCity(search) : null;
  }

  function handlerOnBlur(event) {
    setCity(search);
  }


  return (
<>
    <Search
      onChange={(event) => handlerOnChange(event)}
      onKeyDown={(event) => handlerOnKeyDown(event)}
      onBlur={(event) => handlerOnBlur(event)}
    />
    {weatherInfo.location && weatherInfo.forecast.forecastday.map((item) => {
      return (
        <div className="weather-wrapper">
          <div>{item.date}</div>
          <img className="weather-icon" src={item.day.condition.icon} alt={"icon"}/>
          <div>{item.day.condition.text}</div>
          <div>{`${item.day.maxtemp_c}° / ${item.day.mintemp_c}° `}</div> 
        </div>
      
      )
    })}
    </>
  )
}


export default App;
