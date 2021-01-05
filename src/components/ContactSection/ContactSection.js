// @flow
import { bindActionCreators } from 'redux';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../reducers/form/formActions';
import ContactSectionView from './ContactSectionView';
import type { Props } from './ContactSectionView';
import type { State } from '../../constants';

type OwnProps = {||};

type MapStateToProps = (State, OwnProps) => {|
    isFailedRequest: boolean,
    isRequesting: boolean,
|};

const mapStateToProps: MapStateToProps = (state: State) => ({
    isFailedRequest: !!state.form.error,
    isRequesting: state.form.isRequesting,
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: bindActionCreators(sendMessage, dispatch),
});

const WrappedComponent: ComponentType<OwnProps> = connect<
    Props, OwnProps, *, *, *, *
>(mapStateToProps, mapDispatchToProps)(ContactSectionView);

export default WrappedComponent;
