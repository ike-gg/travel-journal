import React from "react";
import pinIcon from '../images/pin.png';

const Card = ({location, googleMapsLink, title, time, description, coverImg}) => {

  const convertTimeStamp = (timeStamp) => {
    let convertedTime = new Date(timeStamp);
    let days = convertedTime.getDay();
    let month = convertedTime.toLocaleString(
      'default',
      {month: 'long'}
    );
    let year = convertedTime.getFullYear();
    return `${days} ${month}, ${year}`;
  }

  let timeString = `
    ${convertTimeStamp(time.startTime)} 
    - 
    ${convertTimeStamp(time.endTime)}
  `

  return (
    <div className="card">
      <img 
        className="card--image"
        src={coverImg}
      />
      <div className="card-details">
        <h2 className="card-details--subtitle">
          <img 
            className="card-details--pin"
            src={pinIcon} 
            alt="pin icon"
          />
          <span className="card-details--location">{location}</span>
          <a
            className="card-details--googlelink" 
            href={googleMapsLink}
            target="_blank"
          >View on Google Maps</a>
        </h2>
        <h1 
          className="card-details--title"
        >{title}</h1>
        <h3 className="card-details--time">{timeString}</h3>
        <p className="card-details--decsription">{description}</p>
      </div>
    </div>
  )
}

export default Card;