# 200 - Step 2: Adding Electron

See https://quasar.dev/quasar-cli-vite/developing-electron-apps/preparation/

While Quasar does support Electron, it does not come with Electron configured nor installed. So let's do this now. Navigate to the project directory, and enter the following command from ```containers/app/babylonjs/```:

```
$ quasar mode add electron
```

When you want to run de quatar development server and you get an error "error while loading shared libraries: **libatk-1.0.so.0**: cannot open shared object file: No such file or directory", try this:

```
$ sudo apt install -y libatk1.0-0
```

When you want to run de quatar development server and you get an error "error while loading shared libraries: **libatk-bridge-2.0.so.0**: cannot open shared object file: No such file or directory", try this:

```
$ sudo apt install -y libatk-bridge-2.0.so.0
```

