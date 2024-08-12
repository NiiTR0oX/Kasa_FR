import React from 'react';
import './card.scss';

function Card({ id, title, cover, location, rating, host }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-cover" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-location">{location}</p>
        <div className="card-host">
          <img src={host.picture} alt={host.name} className="host-picture" />
          <span className="host-name">{host.name}</span>
        </div>
        <div className="card-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;