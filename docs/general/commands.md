# Command Line Commands

## Initialization

```Shell
npm run setup
```

Initializes a new project with this boilerplate. Deletes the `react-native-boilerplate`
git history, installs the dependencies and initializes a new repository.

> Note: This command is self-destructive, once you've run it the init script is
> gone forever. This is for your own safety, so you can't delete your project's
> history irreversibly by accident.

## Renaming the app

```command
npm run rename
```
In order to rename your app you can use this command. See details below:

> Note: This script uses [react-native-rename](https://github.com/junedomingo/react-native-rename) package. This package does not attempt to properly rename build artifacts such as `ios/build` or Cocoa Pod installation targets. After renaming your project you should clean, build, and reinstall third party dependencies to get it running properly with the new name.

```command
npm run rename <newName>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)
```
npm run rename <newName> -b <bundleIdentifier>
```

Example:

##### First, Switch to new branch (optional but recommended)
```
$ git checkout -b rename-app
```
##### Then, Rename your app
```
$ npm run rename "Travel App"
```
> With custom Bundle Identifier
```
$ npm run rename "Travel App" -b com.rnboilerplate.travelapp
```

## Development

For <b>IOS</b>:
```sh
npx pod-install # to install pod dependencies
npm run ios     # to run the iOS application
```   

For <b>Android</b>:
```sh
# Make sure the ANDROID_HOME environment variable is configured properly

npm run android # to run the Android application
```

Start the server:
```sh
npm start
```

## Cleaning

```Shell
npm run clean
```

Deletes the example app, replacing it with the smallest amount of boilerplate
code necessary to start writing your app!

> Note: This command is self-destructive, once you've run it you cannot run it
> again. This is for your own safety, so you can't delete portions of your project
> irreversibly by accident.

## Generators

```Shell
npm run generate
```

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s, and `container`s. You can
also run `npm run generate <part>` to skip the first selection. (e.g. `npm run generate container`)

## Building (:warning: Work in progress)

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

Upload the contents of `build` to your web server to
see your work live!

## Testing (:warning: Work in progress)

See the [testing documentation](../testing/README.md) for detailed information
about our testing setup!

## Unit testing (:warning: Work in progress)

```Shell
npm test
```

Tests your application with the unit tests specified in the `**/tests/*.js` files
throughout the application.  
All the `test` commands allow an optional `-- [string]` argument to filter
the tests run by Jest. Useful if you need to run a specific test only.

```Shell
# Run only the Button component tests
npm test -- Button
```

### Watching

```Shell
npm run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

### Remote testing

```Shell
npm run start:tunnel
```

Starts the development server and tunnels it with `ngrok`, making the website
available worldwide. Useful for testing on different devices in different locations!

### Dependency size test

```Shell
npm run analyze
```

This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/) or [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

## Linting

```Shell
npm run lint
```

Lints your JavaScript and your CSS.

```Shell
npm run lint:eslint:fix -- .
```

Lints your code and tries to fix any errors it finds.
