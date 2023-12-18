# 200 - Step 2: Adding Electron

See https://quasar.dev/quasar-cli-vite/developing-electron-apps/preparation/

While Quasar does support Electron, it does not come with Electron configured nor installed. So let's do this now. Navigate to the project directory, and enter the following command from ```containers/app/babylonjs/```:

```
$ quasar mode add electron
```

When you want to run de quatar development server: 

```
$ quasar dev -m electron
```

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