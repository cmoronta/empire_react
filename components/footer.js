import React from 'react'
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

const Footer = () => (
    <div className="container">
        <div className="links">
            {links.map((link) => (
                <Link href={link.href}>
                    <a>{link.label}</a>
                </Link>
            ))}
        </div>
        <style jsx>{`

        @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');   
             
        .container {
            height: 400px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justiy-content: center;
            align-items: stretch;
            background-color: #2A2937;
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
            padding: .5em;
            font-family: 'Raleway', sans-serif;
        }

        `}</style>
    </div>
)

export default Footer;