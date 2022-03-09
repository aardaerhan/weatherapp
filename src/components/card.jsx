import "./css/card.css";

function Card(props) {
    return(
        <>
            <div className="container">
            {props.weatherInfo.forecast?.forecastday.map(item => {
               return (
                <div key={item.date} className="weather-card">
                    <div>{item.date}</div>
                    <img className="weather-icon" src={item.day.condition.icon} alt={"icon"}/>
                    <div>{item.day.condition.text}</div>
                    <div>{`${item.day.maxtemp_c}° / ${item.day.mintemp_c}° `}</div> 
                </div>
                )
            })}
            </div>
        </>
    )
}

export default Card;