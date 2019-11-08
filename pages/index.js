import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Banner from "../components/banner";
import Info from "../components/header/header";
import Footer from "../components/footer"

const Home = () => (
  <div>
    <Head>
      <title>Loganville Roofing Contractor</title>
      <script src="https://kit.fontawesome.com/bc49c3384a.js" crossOrigin="anonymous"></script>
    </Head>
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
