import { imageInstances, videoInstances, videoSystems } from "dcl-vlm";
import {
  SceneEnum,
  currentScene,
  scenes,
  setCurrentScene,
} from "src/sceneSwitcher";

export const loadOutside = () => {
  //  render scene glb
  setCurrentScene(SceneEnum.NONE);

  // add the vlm video instance
  videoInstances["outsideVideo"]?.add(); // <== adds video instance with custom id of "outsideVideo"
  imageInstances["outsideImage"]?.add(); // <== image instance

  //check if the video is stopped. if so, start playing video
  // this prevents the video from restarting when switching scenes
  if (videoSystems["videoSource1"]?.stopped) {
    videoSystems["videoSource1"]?.start();
  }
};

export const unloadOutside = () => {
  // add the vlm video instance
  videoInstances["outsideVideo"]?.remove();
  imageInstances["outsideImage"]?.remove();

  // uncomment to stop the video when you go outside
  // videoSystems["videoSource1"].stop();
};
