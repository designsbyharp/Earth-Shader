import gsap from "gsap";
import cameraCreation from "./camera";
import gameloop from "./gameloop";
import rendererCreation from "./renderer";
import sceneCreation from "./scene";
import lightsData from "./lightsData";
import lightsCreation from "./lights";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import resizeBrowser from "./resizeBrowser";
import createSphere from "./sphere";

const init = () => {

  // Canvas Dom element
  const canvas = document.querySelector('.webgl');

  // Window sizes Object
  const sizes = 
  {
    width: window.innerWidth,
    height: window.innerHeight
  };

  // WebGL set up
  const camera = cameraCreation(sizes);
  const scene = sceneCreation();
  const renderer = rendererCreation(canvas, sizes);
  resizeBrowser(sizes, renderer, camera);
  // const controls = new OrbitControls(camera, canvas);

  // Sphere
  const sphere = createSphere();
  scene.add(sphere);


  // Lights
  const lights = lightsCreation(lightsData);
  scene.add(lights.directionalLight1, lights.directionalLight2);

  gameloop(renderer, scene, camera);

}

export default init;