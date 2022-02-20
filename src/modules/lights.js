import { DirectionalLight } from "three"
import lightsData from "./lightsData";

// Create lights
const lightsCreation = (lightValues) =>
{

    // Deconstructor for directional lights
    const {dlight1} = lightsData.lightValues.dlights;
    const {dlight2} = lightsData.lightValues.dlights;

    // Create new Directional lightinstacnes with needed decontructored values
    const directionalLight1 = new DirectionalLight(dlight1.color, dlight1.intensity);
    const directionalLight2 = new DirectionalLight(dlight2.color, dlight2.intensity);

    // Get position values for each directional light 
    const dLights1Positions = dlight1.position;
    const dLights2Positions = dlight2.position;

    // Adjust positions of each directional light instance
    directionalLight1.position.set(dLights1Positions.x, dLights1Positions.y, dLights1Positions.z);
    directionalLight2.position.set(dLights2Positions.x, dLights2Positions.y, dLights2Positions.z);
    
    return {
        directionalLight1,
        directionalLight2
    };
}

export default lightsCreation;