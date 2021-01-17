import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../../reducers/form/formActions';
import ContactSectionView from './ContactSectionView';
import type { State } from '../../types';

const mapStateToProps = (state: State) => ({
    isFailedRequest: !!state.form.error,
    isRequesting: state.form.isRequesting,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendMessage: bindActionCreators(sendMessage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactSectionView);
