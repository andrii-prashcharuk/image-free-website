// @flow
import type { ComponentType } from 'react';
import type { ContextRouter } from 'react-router';
import { withRouter } from 'react-router';
import NavView from './NavView';
import type { Props } from './NavView';

type OuterProps = $Diff<Props, ContextRouter>;

const WrappedComponent: ComponentType<OuterProps> = withRouter<OuterProps>(NavView);

export default WrappedComponent;
