/*
 * ReposScreen Messages
 *
 * This contains all the text for the ReposScreen container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ReposScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Repositories',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search!',
  },
  somethingWentWrong: {
    id: `${scope}.somethingWentWrong`,
    defaultMessage: 'Something went wrong, please try again later.',
  },
});
