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

const Nav = () => (
  <nav className="nav">
    <div>
      <Link href="/">
        <img className="nav-image" src="/static/nav-logo.png" />
      </Link>
    </div>
    <ul>
      {links.map((link, index) => {
        console.log(link);
        return (
          <li key={index}>
            <Link href={link.href}>
              <a>{link.label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
    <style jsx>{`
      .nav-image {
        height: 50px;
        padding-left: 20px;
        margin-right: auto;
        justify-self: start;
      }

      .nav {
        height: 70px;
        display: flex;
        flex-direction: row;
        align-items: center;
        z-index: 1000;
        position: absolute;
        width: 100%;
        background-color: rgba(12.9, 12.5, 14.5, 0.2);
        justify-content: space-between;
        text-shadow: #000 0 0 3px;
      }

      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        text-align: center;
        padding: 20px;
        margin: 0;
      }

      li {
        font-family: "Lato", sans-serif;
        font-size: 1.05em;
        line-height: 40px;
        height: 40px;
        width: auto;
        padding: 0 30px;

        font-weight: 700;
      }

      a {
        transition: 0.2s color;
        text-decoration: none;
        color: #fff;
      }

      a:hover {
        color: #ce5337;
        cursor: pointer;
      }

      i:hover {
        cursor: pointer;
      }
    `}</style>
  </nav>
);

export default Nav;
