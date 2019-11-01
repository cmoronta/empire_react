import React from "react";

const Logos = () => (
  <div>
    <div className="logo-container">
      <img className="logo" src="../../static/logos/bbb.png" />
      <img className="logo" src="../../static/logos/nrca.png" />
      <img className="logo" src="../../static/logos/oc.png" />
      <img className="logo" src="../../static/logos/gaf.jpg" />
    </div>
    <style jsx>{`
      .logo-container {
        padding: 30px;
        margin-top: 60px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }

      .logo {
        height: 88px;
        width: auto;
        margin: 24px;
      }
    `}</style>
  </div>
);

export default Logos;
