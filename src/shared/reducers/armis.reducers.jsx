import * as actionTypes from '../constants/action-types.jsx';

// The init store state
const initState = {
    run_query: false,
    query : '',
    payload: null,
    notifications: []
};


/**
 * Armis reducer
 *
 * @export
 * @param {any} [state=initState]
 * @param {any} action
 * @returns
 */
export default function(state = initState, action) {
    switch (action.type) {
        case actionTypes.RUN_ARMIS:
            return Object.assign({}, state, { run_query: true, query: action.query });
        case actionTypes.PAYLOAD:
            return Object.assign({}, state, { run_query: false, payload: action.payload });
        case actionTypes.SET_NOTIFICATIONS:
            return Object.assign({}, state,
                {   run_query: false,
                    notifications: (action.payload) ?
                        state.notifications.concat(action.payload) :
                        state.notifications
                }
            );
        case actionTypes.DELETE_NOTIFICATION:
            let updatedNotifications = state.notifications.filter((val, index) => (action.index !== index))

            return Object.assign({}, state, { run_query: false, notifications: updatedNotifications});
    }

    return state;
}
