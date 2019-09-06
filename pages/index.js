import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Nav />
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background: #fff;
      }
    `}</style>
  </div>
);

export default Home;
