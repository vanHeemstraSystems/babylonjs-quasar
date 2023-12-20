import {
    Engine,
    Scene,
    SceneLoader,
    FreeCamera,
    Vector3,
    HemisphericLight,
} from '@babylonjs/core';

import '@babylonjs/loaders/glTF';

const createScene = (canvas) => {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);
    const box = BABYLON.Mesh.CreateBox('box', 2, scene);
    const boxMaterial = new BABYLON.StandardMaterial("material", scene);
    boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
    box.material = boxMaterial;

    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    new HemisphericLight('light', Vector3.Up(), scene);

    scene.load;

    // SceneLoader.ImportMesh(null, '/assets/', 'scene.gltf', scene);

    engine.runRenderLoop(() => {
        scene.render();
    });
};

export { createScene };  