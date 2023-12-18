# 100 - Step 1: Creating a base Quasar application

Start from within the following directory:

```containers/app/```

Run the following command to start the Quasar basic application creation process:

```
$ yarn create quasar
```

You will be prompted as follows:

```
yarn create v1.22.21
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Installed "create-quasar@1.4.4" with binaries:
      - create-quasar


 .d88888b.
d88P" "Y88b
888     888
888     888 888  888  8888b.  .d8888b   8888b.  888d888
888     888 888  888     "88b 88K          "88b 888P"
888 Y8b 888 888  888 .d888888 "Y8888b. .d888888 888
Y88b.Y8b88P Y88b 888 888  888      X88 888  888 888
 "Y888888"   "Y88888 "Y888888  88888P' "Y888888 888
       Y8b

? What would you like to build? › - Use arrow-keys. Return to submit.
❯   App with Quasar CLI, let's go! - spa/pwa/ssr/bex/electron/capacitor/cordova
    AppExtension (AE) for Quasar CLI
    Quasar UI kit
```

Choose **App with Quasar CLI** and hit ENTER.

Name your project:

```
? Project folder: › babylonjs
```

When asked to choose your Quasar version, choose v2:

```
? Pick Quasar version: › - Use arrow-keys. Return to submit.
❯   Quasar v2 (Vue 3 | latest and greatest) - recommended
    Quasar v1 (Vue 2)
```

Pick as script type **TypeScript**:

```
? Pick script type: › - Use arrow-keys. Return to submit.
    Javascript
❯   Typescript
```

Choose **Vite** as Quasar App CLI variant:

```
? Pick Quasar App CLI variant: › - Use arrow-keys. Return to submit.
❯   Quasar App CLI with Vite - recommended
    Quasar App CLI with Webpack
```

Use **babylonjs** for the package name:

```
? Package name: › babylonjs
```

Use also **babylonjs** as the project product name:

```
? Project product name: (must start with letter if building mobile apps) › babylonjs
```

As the project description use:

```
? Project description: › A Quasar Project with BabylonJS
```

Use your GitHub registered author name:

```
? Author: › Willem van Heemstra <wvanheemstra@icloud.com>
```

For the Vue component style, we use the recommended:

```
? Pick a Vue component style: › - Use arrow-keys. Return to submit.
❯   Composition API - recommended
    Composition API with <script setup>
    Options API
    Class-based
```

Next, for CSS preprocessor, choose **SCSS**:

```
? Pick your CSS preprocessor: › - Use arrow-keys. Return to submit.
❯   Sass with SCSS syntax
    Sass with indented syntax
    None (the others will still be available)
```

Moreover, choose the following features:

```
? Check the features needed for your project: ›  
Instructions:
    ↑/↓: Highlight option
    ←/→/[space]: Toggle selection
    a: Toggle all
    enter/return: Complete answer
◉   ESLint
◉   State Management (Pinia)
◯   State Management (Vuex) [DEPRECATED by Vue Team]
◉   Axios
◉   Vue-i18n
```

Pick **Prettier** as the ESLint preset:

```
? Pick an ESLint preset: › - Use arrow-keys. Return to submit.
❯   Prettier - https://github.com/prettier/prettier
    Standard
    Airbnb
```

Lastly, when asked use **yarn**:

```
? Install project dependencies? (recommended) › - Use arrow-keys. Return to submit.
❯   Yes, use yarn
    No, I will handle that myself
```

The end prompt is as follows:

```
To get started:

  cd babylonjs
  yarn #or: npm install
  yarn lint --fix # or: npm run lint -- --fix
  quasar dev # or: yarn quasar dev # or: npx quasar dev

Documentation can be found at: https://v2.quasar.dev

Quasar is relying on donations to evolve. We'd be very grateful if you can
read our manifest on "Why donations are important": https://v2.quasar.dev/why-donate
Donation campaign: https://donate.quasar.dev
Any amount is very welcome.
If invoices are required, please first contact Razvan Stoenescu.

Please give us a star on Github if you appreciate our work:
  https://github.com/quasarframework/quasar

Enjoy! - Quasar Team
```

**WARNING**: Update the package.json file to support your newer Node version, if you are on version 20 or newer.

```
...
 "engines": {
    "node": "^20 || ^18 || ^16 || ^14.19",
     ...
 }    
...
```
containers/app/babylonjs/package.json

Follow the recommendation:
```
$ cd babylonjs
$ yarn #or: npm install
$ yarn lint --fix # or: npm run lint -- --fix
$ quasar dev # or: yarn quasar dev # or: npx quasar dev
```

You will be prompted:

```

 .d88888b.
d88P" "Y88b
888     888
888     888 888  888  8888b.  .d8888b   8888b.  888d888
888     888 888  888     "88b 88K          "88b 888P"
888 Y8b 888 888  888 .d888888 "Y8888b. .d888888 888
Y88b.Y8b88P Y88b 888 888  888      X88 888  888 888
 "Y888888"   "Y88888 "Y888888  88888P' "Y888888 888
       Y8b


 » Reported at............ 12/18/2023 12:46:28 PM
 » App dir................ /workspace/babylonjs-quasar/containers/app/babylonjs
 » App URL................ http://localhost:9000/
                           http://10.0.5.2:9000/
 » Dev mode............... spa
 » Pkg quasar............. v2.14.2
 » Pkg @quasar/app-vite... v1.7.1
 » Browser target......... es2019|edge88|firefox78|chrome87|safari13.1

 App • Opening default browser at http://localhost:9000/
```

In a separate browser window or in preview, you will see the page of your newly created Quasar App:

![quasar_app](https://github.com/vanHeemstraSystems/babylonjs-quasar/assets/1499433/70953934-edbb-4af6-85fe-05b158241596)

Our Quasar base is now ready for use, and we can move on to the next part - getting our Electron mode ready.