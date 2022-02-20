import { MeshBasicMaterial, TextureLoader } from "three";
import { Mesh } from "three";
import { ShaderMaterial } from "three";
import { SphereBufferGeometry } from "three";
import appData from "./data";
import loadTexture from "./loadTexture";
import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';
import img1 from '../../static/test.jpg';

console.log(img1)

const createSphere = () =>
{
    //const {img} = appData.imgs.img1;
    const texture = loadTexture(img1);
    console.log(texture) // image: undefined
    const sphereGeometry = new Mesh(
        new SphereBufferGeometry(5, 50, 50),
        new ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                globeTexture: {
                    value: new TextureLoader().load(img1)
                }
            }
        })
    )

    console.log(sphereGeometry)

return sphereGeometry;
}

export default createSphere;