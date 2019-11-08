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
    href: "https://www.facebook.com/empireroofingandrestoration/"
  },
  {
    location: "static/socials/instagram.svg",
    href: "https://www.instagram.com"
  },
  {
    location: "static/socials/youtube.svg",
    href: "https://www.youtube.com"
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
          <img className="scl-icon" src={social.location} alt="social icon" />
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

      .scl-icon {
          width: 50px;
          heigth: 50px;
      }
    `}</style>
  </div>
);

export default Footer;
