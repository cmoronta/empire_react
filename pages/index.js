import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import Banner from '../components/banner'

const Home = () => (
  <div>
    <Nav />
    <Banner />
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
