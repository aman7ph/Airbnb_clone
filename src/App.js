import React from 'react';
import './style.css';
import NaveBar from './../components/Navbar.js';
import Hero from './../components/Hero.js';
import Card from './../components/card.js';
import data from './data.js';
console.log(data);
export default function App() {
  const cards = data.map((data) => {
    return (
      <Card
        //one way of passing props
        /*  img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        openSpots={data.openSpots} */
        //another way of passing props
        /*  item={data} */
        {...data} //passing props using object distracter
      />
    );
  });
  return (
    <div>
      <NaveBar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
