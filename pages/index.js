import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import Banner from "../components/banner";
import Info from "../components/header/header";
import Footer from "../components/footer"

const Home = () => (
  <div>
    <Nav />
    <Banner />
    <Info />
    <Footer />
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
