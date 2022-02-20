import { WebGLRenderer, ACESFilmicToneMapping, PCFSoftShadowMap, sRGBEncoding } from "three";

const rendererCreation = (canvas, sizes) =>
{
    // Renderer creation and settings
    const renderer = new WebGLRenderer
    ({
        canvas: canvas,
        antialias: true        
    });

    // Renderer set size and pixel ratio setting
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Renderer enhancement settings
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.outputEncoding = sRGBEncoding;

    return renderer;
}

export default rendererCreation;