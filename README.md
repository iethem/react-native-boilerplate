# react-native-boilerplate

<!-- [![react-native-boilerplate](/.gh-assets/header.png)](https://github.com/iethem/react-native-boilerplate) -->
<div align="center"><strong>Start your next react-native project in seconds</strong></div>

<div align="center">A react-native project template with the best DX and a focus on performance and best practices. </div>
<p align="center">
  <p align="center">
    <!-- iOS -->
    <img alt="Supports Expo iOS" longdesc="Supports iOS" src="https://img.shields.io/badge/iOS-000.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
    <!-- Android -->
    <img alt="Supports Expo Android" longdesc="Supports Android" src="https://img.shields.io/badge/Android-000.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </p>
</p>

<div align="center">
  <sub>Inspired and forked from <a href="https://github.com/react-boilerplate/react-boilerplate">react-boilerplate</a>.</sub>
</div>

## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>
</dl>

But wait... there's more!

- _The best test setup:_ Automatically guarantee code quality and non-breaking
  changes. (Seen a react-native app with 100% test coverage before?)
- _Stay fast_: Profile your app's performance from the comfort of your command
  line!

There’s also a <a href="https://vimeo.com/168648012">fantastic video</a> on how to structure your React apps with scalability in mind. It provides rationale for the majority of boilerplate's design decisions.

<sub><i>Keywords: React.js, React-Native, Redux, Hot Reloading, ESNext, Babel, react-navigation, redux-saga, IOS, Android</i></sub>

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/iethem/react-native-boilerplate.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
At this point you can run the following commands to see the example app:
    
    For <b>IOS</b>:
    ```sh
    cd ios
    pod install # to install pod dependencies
    cd ..       # to come back to the root folder
    npm run ios # to run the iOS application
    ```   
    For <b>Android</b>:
    ```sh
    npm run android # to run the Android application
    ```
    Start the server:
    ```sh
    npm start
    ```
5.  Run `npm run clean` to delete the example app.

Now you're ready to rumble!

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

## Documentation
:warning: **WORK IN PROGRESS**

- [**The Hitchhiker's Guide to `react-native-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## Contributors

Thanks to you all the [react-boilerplate contributors](https://github.com/react-boilerplate/react-boilerplate#contributors)! 

Contributions of any kind welcome!

## License

This project is licensed under the MIT license, Copyright (c) 2019 İbrahim Ethem Topçu. For more information see [LICENSE.md](LICENSE.md).
