import React from 'react';
import Card from './Card';
import './CardList.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const CardList = () => (
  <section className="card-list">
    <Card image={image1} />
    <Card image={image2} />
    <Card image={image3} />
  </section>
);

export default CardList;
