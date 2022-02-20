// lights
let lightsData = 
{
    "lightValues" : 
    {
        "dlights" : 
        {
            "dlight1" : {
                "color" : "#FFFFFF", // 0xFFFFFF value changes to 16777215 so using Hex Code
                "intensity" : 0.6,
                "position": {
                    "x" : 0,
                    "y" : 1, 
                    "z" : 1
                }
            },
            "dlight2": {
                "color": "#FFFFFF",
                "intensity" : 0.8,
                "position" : {
                    "x" : 0,
                    "y" : 0,
                    "z" : -1
                }
            }
        },
        "pLight" : {
            "plight1" : {
                "color": 0xFFFFFF,
                "intensity" : 0.5,
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 2
                }
            }
        }
    }
};

export default lightsData;


