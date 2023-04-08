import { connectCMS, useLocal } from "dcl-vlm";
import { createSceneSwitchers } from "./sceneSwitcher";
import { loadOutside } from "./scenes/outside";

const init = async () => {
  await connectCMS(); // <== using async/await is important!
  //next functions need video objects that take time to load in.
  createSceneSwitchers();
  loadOutside();
};

init();
