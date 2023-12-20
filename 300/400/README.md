# 400 - Step 4: Loading a model

For this step we'll be loading a 3D model of a house to demonstrate our application in action. We're sourcing the model from [OpenGameArt.org](http://opengameart.org/), specifically the "Stellwerk-A" package made available to the public domain by **Brylie Christopher Oxley**, and all credit for the artwork should go to them.

The package can be downloaded from: https://opengameart.org/content/stellwerk-a

Let's begin by downloading this package and unpacking the file. From here we'll create a directory called "assets" in our ```containers/app/babylonjs/public``` directory, and copy our files over.

**NOTE**: Before being able to upload the above model, due to size restrictions, we upload a model called ```lego_baseplate_48x48_4186_dark_grey.gltf``` in the meantime.

Next we'll need to acquire the BabylonJS loaders module, if not already done so. Execute the following command in your terminal:

```
$ yarn add @babylonjs/loaders --dev
```

Now let's open our ```containers/app/babylonjs/src/scenes/StartingScene.js`````` file again, and we will replace our blue box with the 3D model.


```
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

    // SceneLoader.ImportMesh(null, '/assets/', 'lego_baseplate_48x48_4186_dark_grey.gltf', scene);
    SceneLoader.ImportMesh('home', '/assets/', 'scene.gltf', scene);

    engine.runRenderLoop(() => {
        scene.render();
    });
};

export { createScene };  
```
containers/app/babylonjs/src/scenes/StartingScene.js

Let's step through the changes to our code:

Firstly we've added ```import '@babylonjs/loaders/glTF'``` to enable Babylon to process glTF files.

Next, we added the line ```SceneLoader.ImportMesh('lego_baseplate', '/assets/', 'lego_baseplate_48x48_4186_dark_grey.gltf', scene);``` to load the file from our ```public/assets``` directory. The first argument assigns an optional name, the second indicates our asset directory, the third is the root filename itself, and the fourth is an optional argument indicating our desired scene object.

Lastly, we removed the code that would create our box in the previous example, and get rid of the unused imports.

Now when we run it, we'll see our application render the model.

As you can see the changes to include further assets can be fairly minute. From this point forward you'll be able to flesh out our 3D application, however this concludes our tutorial.