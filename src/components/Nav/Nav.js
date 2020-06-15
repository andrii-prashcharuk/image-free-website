// @flow
import type { ContextRouter } from 'react-router';
import { withRouter } from 'react-router';
import NavView from './NavView';
import type { Props } from './NavView';

export default withRouter<$Diff<Props, ContextRouter>>(NavView);
