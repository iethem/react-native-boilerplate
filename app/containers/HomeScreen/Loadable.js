/**
 *
 * Asynchronously loads the component for HomeScreen
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
