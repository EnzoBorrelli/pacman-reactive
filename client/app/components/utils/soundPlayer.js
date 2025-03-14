export default function SoundPlayer(folder, audio) {
  const sound = `/assets/sounds/${folder}/${audio}.wav`;
  new Audio(sound).play();
  console.log("Playing sound:", sound);
}
