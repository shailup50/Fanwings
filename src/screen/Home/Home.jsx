import React from "react";
import { Banner, Slider } from "../../components/Home/BannerAboutSlider.jsx";
import { Feature, Product } from "../../components/Home/FeatureProduct.jsx";

function Home() {
  return (
    <>
      <Banner />
      <Slider />
      {/* <Feature /> */}
      <Product />
    </>
  );
}

export default Home;
