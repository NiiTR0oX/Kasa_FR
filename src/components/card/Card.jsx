import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <Link to={"/logement-detail/" + id} className="card">
      <img src={cover} alt={title} className="card_cover"/>
      <h3 className="card_title">{title}</h3>
    </Link>
  );
}

export default Card;