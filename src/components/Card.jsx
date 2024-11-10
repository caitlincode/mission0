import React from 'react';
import './Card.css';

const Card = ({ image }) => (
  <div className="card">
    <div className="card-image">
      <img src={image} alt="Card" />
    </div>
    <h3>Lorem ipsum</h3>
    <p>Est venenatis</p>
  </div>
);

export default Card;
