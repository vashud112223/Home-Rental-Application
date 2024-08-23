import React from "react";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Categories from "../components/Categories";
import Listing from "../components/Listing";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listing />
      <Footer />
    </>
  );
}

export default HomePage;
