# 300 - Step 3: Integrating BabylonJS

Let's return to our terminal and close the development server for now by pressing ```CTRL + C```, taking us back to our project's root directory. Next, enter the following command froim within ```containers/app/babylonjs/```:

```
$ yarn add --save-dev @babylonjs/core @babylonjs/inspector
```

**NOTE**: Installing the Inspector is optional, but it will allow us to inspect the Babylon JS models easily.

Note that we are using Babylon's ES6 modules here so that we can leverage *tree-shaking*, removing any unused code from our final build.

Before we proceed, let's get our Quasar application ready to house a BabylonJS instance. Navigate to ```containers/app/babylonjs/src/css/app.scss``` in your IDE.




WE ARE HERE ...