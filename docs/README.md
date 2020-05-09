# Documentation

## Table of Contents

- [General](general)
  - [**CLI Commands**](general/commands.md)
  - [Introduction ](general/introduction.md)
  - [Tool Configuration](general/files.md)
  - [Server Configurations](general/server-configs.md)
  - [Deployment](general/deployment.md) _(currently Heroku and AWS S3 specific)_
  - [Debugging](general/debugging.md)
  - [FAQ](general/faq.md)
  - [Gotchas](general/gotchas.md)
  - [Remove](general/remove.md)
  - [Extracting components](general/components.md)
- [Testing](testing)
  - [Unit Testing](testing/unit-testing.md)
  - [Component Testing](testing/component-testing.md)
  - [Remote Testing](testing/remote-testing.md)
- [Styling (CSS)](css/README.md)
  - [Next Generation CSS](css/README.md#next-generation-css)
  - [CSS Support](css/README.md#css-we-support)
  - [styled-components](css/README.md#styled-components)
  - [Stylesheet](css/README.md#stylesheet)
  - [CSS Modules](css/README.md#css-modules)
  - [Sass](css/README.md#sass)
  - [LESS](css/README.md#less)
- [JS](js)
  - [Redux](js/redux.md)
  - [Immer](js/immer.md)
  - [reselect](js/reselect.md)
  - [redux-saga](js/redux-saga.md)
  - [i18n](js/i18n.md)
  - [navigating](js/navigating.md)
- [Maintenance](maintenance)
  - [Dependency Update](maintenance/dependency.md)
- [Forks](forks)

## Overview

### Quickstart

First, we need to make sure that the development environment is properly configured. When we look at the [official documentation](https://reactnative.dev/docs/environment-setup), we come across 2 different configurations. We will use the __React Native CLI__-related configuration in this project and we have not mentioned anything related to the __Expo CLI__ here.

[Setting up the development environment](https://reactnative.dev/docs/environment-setup)

After making your IOS and Android configuration according to your operating system with the steps described in the React Native CLI tab at the bottom of this page, you can continue with the steps below to start the application.

1.  Let's kick the tyres by launching the sample _Repospective_ app
    bundled with this project to demo some of its best features:

    ```sh
    npm run setup
    ```

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

1.  Navigate to your emulator (IOS/Android) to see it in action.
  
    - Add a Github username to see Redux and Redux Sagas in action: effortless
    - Press buttons to navigate between screens
    - Choose a language to see the i18n feature in the whole application
      async state updates and side effects are now yours :)

1.  Time to build your own app: run

    ```shell
    npm run clean
    ```

    ...and use the built-in generators to start your first feature.

### Building & Deploying (:warning: Work in progress)

1.  Run `npm run build`, which will compile all the necessary files to the
    `build` folder.

2.  Upload the contents of the `build` folder to your web server's root folder.

### Structure

The [`app/`](../../../tree/master/app) directory contains your entire application code, including CSS,
JavaScript and tests.

The rest of the folders and files only exist to make your life easier, and
should not need to be touched.

_(If they do have to be changed, please [submit an issue](https://github.com/react-boilerplate/react-boilerplate/issues)!)_

### CSS (:warning: Work in progress)

Using [tagged template literals](https://www.styled-components.com/docs/advanced#tagged-template-literals)
(a recent addition to JavaScript) and the [power of CSS](https://github.com/styled-components/styled-components/blob/master/docs/css-we-support.md),
`styled-components` allows you to write actual CSS code to style your components.
It also removes the mapping between components and styles – using components as a
low-level styling construct could not be easier!

See the [CSS documentation](./css/README.md) for more information.

### JS (:warning: Work in progress)

We bundle all your clientside scripts and chunk them into several files using
code splitting where possible. We then automatically optimize your code when
building for production so you don't have to worry about that.

See the [JS documentation](./js/README.md) for more information about the
JavaScript side of things.

### Testing (:warning: Work in progress)

For a thorough explanation of the testing procedure, see the
[testing documentation](./testing/README.md)!

#### Unit testing (:warning: Work in progress)

Unit tests live in `test/` directories right next to the components being tested
and are run with `npm run test`.
