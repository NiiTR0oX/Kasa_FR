import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <Link to={"/Card" + id} className="card">
      <img src={cover} alt={title} className="card-cover"/>
      <h3 className="card-title">{title}</h3>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-location">{location}</p>
          <div className="card-host">
            <img src={host.picture} alt={host.name} className="host-picture"/>
            <span className="host-name">{host.name}</span>
          </div>
          <div className="card-rating">
            {Array.from({length: 5}, (_, index) => (
                <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
            ))}

          </div>
        </div>
    </Link>
  );
}

export default Card;