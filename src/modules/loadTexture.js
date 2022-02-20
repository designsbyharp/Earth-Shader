import { TextureLoader } from "three";

const loadTexture = (texture) =>
{
    const textureLoader = new TextureLoader();
    const textureLoad = textureLoader.load(texture);

    return textureLoad;
}

export default loadTexture;