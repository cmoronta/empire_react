import React from "react";
import LocationCards from "./locationCards";
import Video from './video'
import Red from './red'
import Logos from './logos'


const Info = () => (
  <div className="info-container">
    <LocationCards />
    <Video />
    <Red />
    <Logos />
    <style jsx>{`
      .info-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 42px;
        padding-top: 32px;
      }
    `}</style>
  </div>
);

export default Info;
