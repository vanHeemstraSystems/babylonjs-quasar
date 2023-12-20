# 300 - Step 3: Integrating BabylonJS

Let's return to our terminal and close the development server for now by pressing ```CTRL + C```, taking us back to our project's root directory. Next, enter the following command froim within ```containers/app/babylonjs/```:

```
$ yarn add @babylonjs/core @babylonjs/loaders @babylonjs/inspector --dev
```

**NOTE**: Installing the Inspector is optional, but it will allow us to inspect the Babylon JS models easily.

Note that we are using Babylon's ES6 modules here so that we can leverage *tree-shaking*, removing any unused code from our final build.

Before we proceed, let's get our Quasar application ready to house a BabylonJS instance. Navigate to ```containers/app/babylonjs/src/css/app.scss``` in your IDE.

Here we add some simple code to prevent scrollbars appearing once our BabylonJS canvas takes up the whole body. We'll also ensure that selecting our canvas does not produce a focus outline. 

Enter the following CSS code:

```
// app global css in SCSS format
body {
    overflow: hidden;
}
canvas {
    outline: none;
}
```
containers/app/babylonjs/src/css/app.scss

Next let's review our application layout since we will not need any of the default UI options. Open ```containers/app/babylonjs/src/layouts/MainLayout.vue```. 

```
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
```
containers/app/babylonjs/src/layouts/MainLayout.vue

Here we remove all preexisting code and enter the following to produce a simple layout without any header, footer or sidebars.

```
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
```
containers/app/babylonjs/src/layouts/MainLayout.vue

If you load the Quasar application now, it will display only the default IndexPage.vue, which is where we will be placing our BabylonJS canvas. Open ```containers/app/babylonjs/src/pages/IndexPage.vue```.

```
<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
</script>
```
containers/app/babylonjs/src/pages/IndexPage.vue

Replace the default code with the following:

```
<template>
  <canvas ref="bjsCanvas" />
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { createScene } from "../scenes/StartingScene";

export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);

    onMounted(() => {
      if (bjsCanvas.value) {
        onResize();
        createScene(bjsCanvas.value);
        window.addEventListener("resize", onResize);
      }
    });

    onUnmounted(() => {
      window.removeEventListener("resize", onResize);
    });

    function onResize() {
      if (bjsCanvas.value != null) {
        bjsCanvas.value.width = window.innerWidth;
        bjsCanvas.value.height = window.innerHeight;
      }
    }

    return {
      bjsCanvas,
    };
  },
};
</script>
```
containers/app/babylonjs/src/pages/IndexPage.vue

**NOTE**: We'll have to create a scene before we can preview our application.

In this code we define our BabylonJS canvas, create our scene, and add an event listener to adjust our canvas to the window size upon resizing. We also call this handler's function upon our instance creation, to resize the canvas when the application opens. For good form, we also remove this event listener should this component be unmounted.

Next we will create our first BabylonJS scene. Create a folder called "scenes" in your ```containers/app/babylonjs/src``` directory, and create a file therein called StartingScene.js.

This will be where we export the function that creates our scene. Enter the following code:

```
import {
    Engine,
    Scene,
    FreeCamera,
    Vector3,
    MeshBuilder,
    StandardMaterial,
    Color3,
    HemisphericLight,
} from '@babylonjs/core';

const createScene = (canvas) => {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);

    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    new HemisphericLight('light', Vector3.Up(), scene);

    const box = MeshBuilder.CreateBox('box', { size: 2 }, scene);
    const material = new StandardMaterial('box-material', scene);
    material.diffuseColor = Color3.Blue();
    box.material = material;

    engine.runRenderLoop(() => {
        scene.render();
    });
};

export { createScene }; 
```
containers/app/babylonjs/src/scenes/StartingScene.js

Stepping through it from top to bottom, we first import the requisite functions from BabylonJS' core. We then proceed to our scene definition, where we define an engine for our canvas, followed by a scene for our engine.

We then create a "free" camera i.e. one that can be controlled through dragging the mouse or touch screen, positioning it slightly up and toward the user. We point camera at the zero point, and connect it to BabylonJS' input handling.

We next create a light for our scene, followed by a simple box with a default material which we assign the color blue. Lastly we begin the render loop, which our application will then cycle through on each frame, wherein we call for the scene to be drawn.

Your Quasar / BabylonJS application is now essentially ready. Let's run it to see what we get. Return to the console, and execute the following command.

```
$ yarn #or: npm install
$ yarn lint --fix # or: npm run lint -- --fix
$ quasar dev -m electron # or: yarn quasar dev -m electron # or: npx quasar dev -m electron
```

**NOTE**: if quasar is not recognized as a command, install quasar globally (again):

```
$ yarn global add @quasar/cli
```

Then try again.

WE ARE HERE ...