import React from "react";

const Video = () => (
  <div>
    <div className="video-container">
      <div className="text-container">
        <h1 className="header-text">
          GAF Master Elite Certified Roofer in Atlanta, GA
        </h1>
        <p>
          Your roof protects you from all the elements and if a hail storm
          causes damages, it will be weakened. The damage to your siding and
          roof may not be obvious at a glance, but hail can cause the shingles
          to weaken and start a pattern of corrosion. If left unfixed, the
          exterior will eventually deteriorate and cause even more damage to
          your home. To ensure that all damages are accurately detected and
          repaired, you need to call a storm damage expert at Empire Roofing.
        </p>
      </div>
      <div>
        <iframe
          width="600"
          height="360"
          src="https://www.youtube.com/embed/AIcZeqt1cNQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <style jsx>{`
      .video-container {
        display: flex;
        height: 50%;
        width: 100%;
        padding-bottom: 64px;
      }
      ,
      .text-container {
        margin: 16px;
        text-align: left;
      }
      .text-container p {
        font-size: 1.5vw;
        color: #7e7e7e;
        font-family: "Roboto", sans-serif;
      }
      .header-text {
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        text-align: left
    }
    `}</style>
  </div>
);

export default Video;
