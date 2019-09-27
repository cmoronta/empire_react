import React from "react";

const Red = () => (
  <div>
    <div className="header2">
      <div className="red-container">
        <h1 className="header-text">Loganville Roofing Contractor</h1>
        <p className="text2">
          Atlanta, Georgia roofing company Empire Roofing and Restoration is one
          of only 2% of roofing contractors in the country to achieve GAF Master
          Elite Certification. This means that we can offer warranties that
          other contractors cannot offer, such as the Weather Stopper Golden
          Pledge. Contact us today for new roof installation, roof repair and
          replacement, storm damage repair, hail damage repair, wind damage
          repair and more! We work with all insurance companies and provide
          internal financing. Get a free inspection and cost estimate by calling
          770-703-5140.
        </p>
      </div>
      <div className="email-container">
        <h1 className="header-text">
          Sign Up For Our Newsletter and Receive $500 Off Your Next Roof!
        </h1>
        <div className="email">
          <input type="email" placeholder="Email"></input>
          <button type="submit" id="email-submit">
            Submit
          </button>
        </div>
      </div>
    </div>
    <style jsx>{`
      .header2 {
        margin: -42px;
        background: #ce5337;
        color: #fff;
        position: relative;
        z-index: 1;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
      }

      .header2:after {
        background: inherit;
        bottom: 0;
        content: "";
        display: block;
        height: 50%;
        left: 0;
        position: absolute;
        right: 0;
        transform: skewY(-1.5deg);
        transform-origin: 100%;
        z-index: -1;
      }

      .header2::before {
        background: inherit;
        bottom: 0;
        content: "";
        display: block;
        height: 50%;
        left: 0;
        position: absolute;
        right: 0;
        transform: skewY(1.5deg);
        transform-origin: 100% 0;
        z-index: -1;
        top: 0;
        padding-top: 30px;
      }

      .red-container {
        color: #fff;
        text-align: left;
        width: 45%;
        margin: 24px;
      }

      .header-text {
        font-family: "Lato", sans-serif;
        font-weight: 600;
        text-align: left;
      }

      .text2 {
        font-family: "Antic Slab", serif;
        font-size: 24px;
      }
      .email-container {
        width: 45%;
        text-align: center;
      }

      .email-container h1 {
        text-align: center;
      }

      .email-container input[type="email"] {
        border: none;
        border-radius: 3px;
        padding: 5px 10px;
        width: 40%;
        font-size: 16px;
      }

      .email-container button {
        display: inline;
        border-radius: 3px;
        background-color: #f5f5f5;
        border: none;
        padding: 8px 20px;
        text-align: center;
        text-decoration: none;
        font-size: 12px;
        margin-left: 16px;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
      }

      .email {
        margin: 12px;
      }
    `}</style>
  </div>
);

export default Red;
