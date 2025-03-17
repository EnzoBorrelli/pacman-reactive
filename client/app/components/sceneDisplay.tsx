import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainMenu from "~/scenes/mainMenu";
import SmallMap from "~/scenes/maps/smallMap";
import MapSelector from "~/scenes/mapSelector";
import Sprites from "~/scenes/sprites";
import { RootState } from "~/store";
import { setMapSize } from "~/store/mapSlice";
import { Maps } from "./enums/maps";

export default function SceneDisplay() {
  const scene = useSelector((state: RootState) => state.scene);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (scene.scene) {
      case "smallMap":
        dispatch(setMapSize(Maps.smallMap));
        break;
      case "classicMap":
        dispatch(setMapSize(Maps.classicMap));
        break;
      //case "classicMap":
        //dispatch(setMapSize(Maps.smallMap));
      default:
        dispatch(setMapSize(Maps.classicMap));
        break;
    }
  }
  , [scene, dispatch]); 

  switch (scene.scene) {
    case "mainMenu":
      return <MainMenu />;
    case "sprites":
      return <Sprites />;
    case "mapSelector":
      return <MapSelector />;
    case "smallMap":
      return <SmallMap />;
    default:
      // Handle unexpected screen values
      console.warn(`Unexpected screen: ${screen}`);
      return null;
  }
}
