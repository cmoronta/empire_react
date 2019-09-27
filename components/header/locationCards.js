import React from "react";
import Card from './card'

const LocationCards = () => (
  <div className="card-container">
    <Card location="Georgia" text="test"/>
    <Card location="North Carolina" text="test" />
    <style jsx>{`
      .card-container {
        height: 50%;
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 64px;
      }
    `}</style>
  </div>
);

export default LocationCards;
