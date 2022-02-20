import { PerspectiveCamera } from "three";

// Create camera
const cameraCreation = (sizes) =>
{
    const camera = new PerspectiveCamera
    (
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );

    // Adjust camera
    camera.position.z = 10;

    return camera;
}

export default cameraCreation;