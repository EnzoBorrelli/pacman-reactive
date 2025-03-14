import { useSelector } from "react-redux";
import MainMenu from "~/scenes/mainMenu";
import SmallMap from "~/scenes/maps/smallMap";
import MapSelector from "~/scenes/mapSelector";
import Sprites from "~/scenes/sprites";
import { RootState } from "~/store";

export default function SceneDisplay() {
  const scene = useSelector((state: RootState) => state.scene);

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
