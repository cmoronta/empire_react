import React from "react";

const Card = props => (
  <div>
    <div className="card">
      <div className="card-img">
        <img id={props.id}/>
      </div>
      <div className="card-column">
        <div className="card-caption">
          <h2 className="header-text">{props.location}</h2>
          <p>{props.text}</p>
        </div>
        <div className="contact-more">
          <h5>Contact This Location</h5>
          <i id="outmore-icon" className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
    <style jsx>{`
      .card {
        height: 350px;
        width: 70%;
        min-width: 400px;
        border-radius: 5px;
        display: flex;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: ease 0.5s;
        will-change: transform;
      }
      .card:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
        transform: translateY(-20px);
      }

      .card:hover .contact-more {
        background: #ce5337;
        transition: ease 0.5s;
      }
      .card-img {
        width: 70%;
        height: 100%;
      }

      .card-img img {
        border-radius: 5px 0 0 5px;
        background-image: url('/home/poliphria/Desktop/code/empire_react/static/blurrf.jpg');
        background-size: contain;
      }

      .card-column {
        width: 45%;
        display: flex;
        flex-direction: column;
        align-content: flex-end;
      }

      .card-caption {
        text-align: left;
        padding: 30px;
      }

      .card-caption h1 {
        text-align: left;
      }

      .contact-more {
        align-self: flex-end;
        padding: 15px 10px;
        background: #efefef;
        border-radius: 0 0 5px 0;
        font-family: "Lato", serif;
      }

      .contact-more h3 {
        justify-self: center;
      }
    `}</style>
  </div>
);

export default Card;
