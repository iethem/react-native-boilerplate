/**
 *
 * Asynchronously loads the component for DetailsScreen
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
