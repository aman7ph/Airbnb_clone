import React from 'react';

export default function Card(props) {
  let badge;
  if (props.openSpots === 0) {
    badge = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badge = 'ONLINE';
  }
  return (
    <div className="card">
      {badge && <div class="card--badge">{badge}</div>}
      <img src={props.coverImg} className="card--image" />
      <div className="card--stats">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png"
          className="card--star"
        />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
