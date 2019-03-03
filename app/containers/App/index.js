/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import DetailsScreen from '../DetailsScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
