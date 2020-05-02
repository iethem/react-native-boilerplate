/*
 * HomeScreen Messages
 *
 * This contains all the text for the HomeScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomeScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Home',
  },
  chooseLanguage: {
    id: `${scope}.chooseLanguage`,
    defaultMessage: 'Choose Language',
  },
  detailsButton: {
    id: `${scope}.detailsButton`,
    defaultMessage: 'Go to Details!',
  },
  learnMore: {
    id: `${scope}.learnMore`,
    defaultMessage: 'Learn More',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomeScreen container!',
  },
});
