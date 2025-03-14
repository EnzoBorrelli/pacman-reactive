interface iSoundPlayer {
  folder: string;
  audio: string;
}

export default function SoundPlayer({ folder, audio }: iSoundPlayer) {
  const sound = `/assets/sounds/${folder}/${audio}.wav`;
  new Audio(sound).play();
  console.log("Playing sound:", sound);
}
