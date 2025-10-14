import React from "react";
import Style from "./Home.module.css";
import MainSlider from "../MainSlider/MainSlider";
import Products from "../Products/Products";
import CategorySlider from "../CategorySlider/CategorySlider";

export default function Home() {
  return <>
      <MainSlider />
      <CategorySlider />
      <Products />
    </>

}
