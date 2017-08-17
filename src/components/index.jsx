import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../shared/actions/index.jsx';
import App from './App.jsx';


/**
 * Map redux's state props to react component props
 *
 * @param {any} state
 * @returns
 */
const mapStateToProps = (state) => {

  const { run_query, query, payload, notifications } = state.armis;

  return {
    run_query,
    query,
    payload,
    notifications
  };
};


/**
 * Map redux's dispatch to react component props
 *
 * @param {any} dispatch
 * @returns
 */
const mapDispatchToProps = (dispatch) => {

  return {
    endQuery: bindActionCreators(actions.endQuery, dispatch),
    doQuery: bindActionCreators(actions.doQuery, dispatch),
    setNotification: bindActionCreators(actions.setNotification, dispatch),
    deleteNotification: bindActionCreators(actions.deleteNotification, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
