import {
    Engine,
    Scene,
    SceneLoader,
    FreeCamera,
    Vector3,
    // MeshBuilder,
    // StandardMaterial,
    // Color3,
    HemisphericLight,
} from '@babylonjs/core';

import '@babylonjs/loaders/glTF';

const createScene = (canvas) => {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);

    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    new HemisphericLight('light', Vector3.Up(), scene);

    /*
    const box = MeshBuilder.CreateBox('box', { size: 2 }, scene);
    const material = new StandardMaterial('box-material', scene);
    material.diffuseColor = Color3.Blue();
    box.material = material;
    */

    scene.load;

    SceneLoader.ImportMesh('lego_baseplate', '/assets/', 'lego_baseplate_48x48_4186_dark_grey.gltf', scene);

    engine.runRenderLoop(() => {
        scene.render();
    });
};

export { createScene };  