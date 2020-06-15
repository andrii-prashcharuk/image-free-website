// @flow
import { bindActionCreators } from 'redux';
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

const connector = connect<Props, OwnProps, *, *, *, *>(mapStateToProps, mapDispatchToProps);

export default connector(ContactSectionView);
