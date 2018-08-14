// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { getFilteredData, getAllData } from '../../reducers/sample/sampleActions';
import SampleComponentView from './SampleComponentView';
import type { State } from '../../constants';

type OwnProps = {};
type MapStateToProps = (State, OwnProps) => *;

const mapStateToProps: MapStateToProps = (state: State) => {
    const { data, isFetching, error } = state.sample;

    return {
        data,
        isFetching,
        error,
    };
};

const mapDispatchToProps = dispatch => ({
    getFilteredData: bindActionCreators(getFilteredData, dispatch),
    getAllData: bindActionCreators(getAllData, dispatch),
});

const connector: Connector<OwnProps, *> = connect(mapStateToProps, mapDispatchToProps);

export default connector(SampleComponentView);
