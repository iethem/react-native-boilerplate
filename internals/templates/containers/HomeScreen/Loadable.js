/**
 *
 * Asynchronously loads the component for HomeScreen
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
