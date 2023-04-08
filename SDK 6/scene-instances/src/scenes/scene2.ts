import { videoInstances, videoSystems } from "dcl-vlm";
import {
  SceneEnum,
  currentScene,
  scenes,
  setCurrentScene,
} from "src/sceneSwitcher";

export const loadScene2 = () => {
  setCurrentScene(SceneEnum.SCENE_2);

  // set a reference to the object for scene 1
  const scene = scenes[currentScene];

  if (scene.entity) {
    engine.addEntity(scene.entity);
    scene.entity.addComponentOrReplace(scene.model);
    scene.entity.addComponentOrReplace(scene.transform);
  }

  // add the vlm video instance
  videoInstances["scene2Instance"]?.add();
  //   videoSystems["videoSource1"].start();
};

export const unloadScene2 = () => {
  // set a reference to the empty scene object
  const emptyScene = scenes[SceneEnum.NONE];
  // set a reference to the object for scene 1
  const scene = scenes[SceneEnum.SCENE_2];

  if (scene.entity) {
    scene.entity.addComponentOrReplace(emptyScene.transform);
  }

  videoInstances["scene2Instance"]?.remove();
};
