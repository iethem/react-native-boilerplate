/*
 * HomeScreen Messages
 *
 * This contains all the text for the HomeScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomeScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomeScreen container!',
  },
});
