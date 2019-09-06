import React from "react";

const Banner = () => (
  <div className="banner-image-container ">
    <img className="banner-image overlay" src="./static/blurrf.jpg" />
    <span className="centered text">Empire Roofing & Restoration</span>
    <span className="subheader text">Craftsmanship You Can Trust</span>
    <button className="button">Contact Us</button>
    <style jsx>{`
      .banner-image-container {
        width: 100vw;
        height: 110vh;
        position: relative;
        text-align: center;
        z-index: 2;
      }

      .banner-image {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        animation-name: zoom-in;
        animation-duration: 2s;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
      }

      @keyframes zoom-in {
        from {
          transform: scale(1.05, 1.05);
        }
        to {
          transform: scale(1, 1);
        }
      }

      .overlay {
        z-index: 3;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }

      .centered {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    
    .subheader {
        position: absolute;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    
    .button {
        position: absolute;
        top: 62%;
        border: none;
        background-color: #ce5337;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        padding: 15px 32px;
        font-size: 1em;
        border-radius: 20px;
        font-family: 'Lato', serif;
        animation-name: button;
        animation-duration: 1s;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.75)
    }
    
    .button:hover {
        background-color: #000;
        transition: all .4s ease-in-out
    }
    
    .text {
        font-family: 'Lato', serif;
        font-size: 3em;
        font-weight: 600;
        letter-spacing: .2px;
        color: #fff;
        text-shadow: -1px -1px 0 #181717 1px -1px 0 #181717 -1px 1px 0 #181717 1px 1px 0 #181717
    }
    `}</style>
  </div>
);

export default Banner;
