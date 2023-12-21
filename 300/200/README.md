# 200 - Step 2: Adding Electron or Tauri

Watch "Tauri vs Electron in 2023 & beyond" at https://www.youtube.com/watch?v=VvpXrzn48ms

# Electron

See https://quasar.dev/quasar-cli-vite/developing-electron-apps/preparation/

While Quasar does support Electron, it does not come with Electron configured nor installed. So let's do this now. Navigate to the project directory, and enter the following command from ```containers/app/babylonjs/```:

```
$ quasar mode add electron
```

When you want to run de quatar development server: 

```
$ quasar dev -m electron
```

**WARNING**: If you get any errors, make sure you have a ```.gitpod.yml``` file at the root of this repository with the following content:

```
# Image of workspace. Learn more: https://www.gitpod.io/docs/configure/workspaces/workspace-image
image: gitpod/workspace-full-vnc:latest
```
.gitpod.yml

The above will facilitate Gitpod for development of Native GUIs.

And you get an error "error while loading shared libraries: **libatk-1.0.so.0**: cannot open shared object file: No such file or directory", try this:

```
$ sudo apt-get update
$ sudo apt-get install libatk1.0-0
```

When you want to run de quatar development server and you get an error "error while loading shared libraries: **libatk-bridge-2.0.so.0**: cannot open shared object file: No such file or directory", try this:

```
$ sudo apt-get update
$ sudo apt-get install libatk-bridge2.0-0
```

When you want to run de quatar development server and you get an error "error while loading shared libraries: **libcups.so.2**: cannot open shared object file: No such file or directory", try this:

```
$ sudo apt-get update
$ sudo apt-get install libcups2
```

When you want to run de quatar development server and you get an error "error while loading shared libraries: **libdrm.so.2**: cannot open shared object file: No such file or directory", try this:

```
$ sudo apt-get update
$ sudo apt-get install libdrm2
```

When you want to run de quatar development server and you get an error "error while loading shared libraries: **libgtk-3.so.0**: cannot open shared object file: No such file or directory", try this:

```
$ sudo apt-get update
$ sudo apt-get install libgtk-3-0
```

When you want to run de quatar development server and you get an error "error while loading shared libraries: **libgbm.so.1**: cannot open shared object file: No such file or directory", try this:

```
$ sudo apt-get update
$ sudo apt-get install libgbm1
```

When you want to run de quatar development server and you get an error "**Missing X server or $DISPLAY**, read this: [Developing native UI applications in Gitpod](https://www.gitpod.io/blog/native-ui-with-vnc)

Let's continue, if all is well ...

You should see in your browser the following landing page:

![quasar_app_native_gui](https://github.com/vanHeemstraSystems/babylonjs-quasar/assets/1499433/50d6de1d-b896-4327-b297-14535880e748)

## Removing or hiding the menubar

You'll note that the Electron window comes with a default menu bar. While in your use case this may be preferable, and you would wish to alter this menu rather than remove it, it is more likely we want to get rid of this as user interfacing will likely be handled in-app.

To do this, let's open the project folder in our IDE and navigate to ```containers/app/babylonjs/src-electron/electron-main.ts```.

There are two approaches we could take here - we could use a frameless window, or simply remove the menubar.

**Frameless**: remove the windowframe altogether, leaving GUI design wholly up to our application.

For completeness however, you can remove the frame entirely by passing ```frame: false``` as an option during BrowserWindow instantiation thusly:

```
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    ...
    frame: false,
    autoHideMenuBar: true,
    ...
  });
```
containers/app/babylonjs/src-electron/electron-main.ts

**Removing the menubar**: this simply removes the default menubar, but retains your user's native window management system.

In our tutorial we will hold onto the window frame for convenience, as this does not prevent frameless fullscreen display anyway.

In order to simply remove the menu bar without touching the window frame, we need to pass ```mainWindow.setMenu(null);``` ahead of connecting Electron's browser to our internal server, as such:

```
...
mainWindow.setMenu(null);
mainWindow.setMenuBarVisibility(false);
mainWindow.loadURL(process.env.APP_URL);
...  
```
containers/app/babylonjs/src-electron/electron-main.ts

As a last point, we will cover configuring Electron for fullscreen-exclusive display. By adding fullscreen: true as an option when our BrowserWindow instance is created, we can have our application start in an irreversible fullscreen mode, like so:

```
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    ...
    fullscreen: true,
    ...
  });
```
containers/app/babylonjs/src-electron/electron-main.ts

# Tauri

Tauri is based on the Java Development Kit (JDK), whereas Electron is based on Chromium.

Tests show that [Tauri outperforms Electron](https://www.youtube.com/watch?v=jWgLOtm9le8), hence why will attemp to also use Tauri.

Read https://crabnebula.dev/about and try https://devtools.crabnebula.dev/

Then follow "Migrating from Electron to Tauri" at https://www.youtube.com/watch?v=fMTtMRLUnIY and try "Tauri/Quasar - Proof of Concept" at https://github.com/Zondax/tauri-quasar-example

MORE ...

**NOTE**: The blue header along the top is part of the HTML markup as defined in ```containers/app/babylonjs/src/layouts/MainLayout.vue```. It is not the frame.

![quasar_app_native_gui_fullscreen](https://github.com/vanHeemstraSystems/babylonjs-quasar/assets/1499433/5f196f57-3784-4aaf-9249-4bbd5c5ecc10)

That's it! Our application is now ready for the next step: BabylonJS integration.
