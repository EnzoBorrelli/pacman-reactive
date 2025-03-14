import { setScene } from "~/store/sceneSlice";
import { Scenes } from "../enums/scene";
import SoundPlayer from "./soundPlayer";

interface iClickBtn {
  scene: Scenes;
  soundData: {
    folder: string;
    audio: string;
  };
}

export default function ClickBtn({ scene, soundData }: iClickBtn) {
  setScene(scene);
  SoundPlayer({ folder: soundData.folder, audio: soundData.audio });
  console.log(`i clicked: ${scene}`);
}
