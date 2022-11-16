import React, { useState } from "react";
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import Slider from "./Slider";
import Slide from "./Slide";
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const slides = [
  {
    color: "#FFFFFF",
    title: "Dessert Recipes",
    description:
      "Hot or cold, our dessert recipes can turn an average meal into a memorable event",
    picture: require("../assets/images/1.png"),
  },
  {
    color: "#F2A1AD",
    title: "Healthy Foods",
    description:
      "Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs",
    picture: require("../assets/images/2.png"),
  },
  {
    color: "#0090D6",
    title: "Easy Meal Ideas",
    description:
      "explore recipes by food type, preparation method, cuisine, country and more",
    picture: require("../assets/images/3.png"),
  },
  {
    color: "#69C743",
    title: "10000+ Recipes",
    description:
      "Browse thousands of curated recipes from top chefs, each with detailled cooking instructions",
    picture: require("../assets/images/4.png"),
  },
  {
    color: "#F2AD62",
    title: "Video Tutorials",
    description:
      "Browse our best themed recipes, cooking tips, and how-to food video & photos",
    picture: require("../assets/images/5.png"),
  },
];

export const assets = slides.map(({ picture }) => picture);

const LiquidSwipe = () => {
  let [fontsLoaded] = useFonts({
    "DMSans-Bold" : require("../assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Medium" : require("../assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular" : require("../assets/fonts/DMSans-Regular.ttf")
});
  if (!fontsLoaded) {
    return;
  }
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];
  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      <Slide slide={slides[index]!} />
    </Slider>
  );
};

export default LiquidSwipe;