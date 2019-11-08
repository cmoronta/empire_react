import React from "react";
import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/faq",
    label: "FAQ"
  },
  {
    href: "/portfolio",
    label: "Portfolio"
  }
];

const socials = [
  {
    location: "static/socials/facebook-f.svg",
    href: "https://www.facebook.com/empireroofingandrestoration/",
    fa: "fab fa-facebook-f fa-2x"
  },
  {
    location: "static/socials/instagram.svg",
    href: "https://www.instagram.com",
    fa: "fab fa-instagram fa-2x"
  },
  {
    location: "static/socials/youtube.svg",
    href: "https://www.youtube.com",
    fa: "fab fa-youtube fa-2x"
  }
];

const Footer = () => (
  <div className="container">
    <div className="links">
      {links.map((link, i) => (
        <Link href={link.href} key={i}>
          <a>{link.label}</a>
        </Link>
      ))}
    </div>
    <div className="socials">
      {socials.map((social, i) => (
        <Link href={social.href} key={i}>
          <span className="scl" style={{color: "white"}}>
            <a href={social.href}><i className={social.fa}></i></a>
          </span>
        </Link>
      ))}
    </div>
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

      .container {
        height: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justiy-content: center;
        align-items: stretch;
        background-color: #2a2937;
      }

      .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 33%;
        padding-top: 4em;
      }

      .links a {
        text-decoration: none;
        color: white;
        padding: 0.5em;
        font-family: "Raleway", sans-serif;
      }

      socials {
        width: 100%,
        height: 33%
        display: flex;
        flex-direction: column
        justify-content: center,
        align-items: center,
      }

      scl a {
        text-decoration: none
        color: white
      }
    `}</style>
  </div>
);

export default Footer;
