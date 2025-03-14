import React from "react";
import { useScreen } from "../../providers/screenProvider";
import MainMenu from "../screens/mainMenu";
import Sprites from "../screens/sprites";
import MapSelector from "../screens/mapSelector";
import Small from "../screens/maps/small";

export default function ScreenSelector() {
  const { screen } = useScreen();

  switch (screen) {
    case "mainMenu":
      return <MainMenu />;
    case "sprites":
      return <Sprites />;
    case "play":
      return <MapSelector />;
    case "small":
      return <Small />;
    default:
      // Handle unexpected screen values
      console.warn(`Unexpected screen: ${screen}`);
      return null; 
  }
}