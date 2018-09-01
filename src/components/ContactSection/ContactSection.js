// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { sendMessage } from '../../reducers/form/formActions';
import ContactSectionView from './ContactSectionView';
import type { State } from '../../constants';

type OwnProps = {};
type MapStateToProps = (State, OwnProps) => *;

const mapStateToProps: MapStateToProps = (state: State) => ({
    isFailedRequest: !!state.form.error,
    isRequesting: state.form.isRequesting,
});

const mapDispatchToProps = dispatch => ({
    sendMessage: bindActionCreators(sendMessage, dispatch),
});

const connector: Connector<OwnProps, *> = connect(mapStateToProps, mapDispatchToProps);

export default connector(ContactSectionView);
