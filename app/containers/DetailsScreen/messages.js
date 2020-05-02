/*
 * DetailsScreen Messages
 *
 * This contains all the text for the DetailsScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.DetailsScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Details',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the DetailsScreen container!',
  },
  repositories: {
    id: `${scope}.repositories`,
    defaultMessage: 'Github Repositories',
  },
  editContainer: {
    id: `${scope}.editContainer`,
    defaultMessage: `Edit {container} to change this screen and then come back to see your edits.`,
  },
});
