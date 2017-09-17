import * as actionTypes from '../constants/action-types.jsx';
import * as Rx from 'rxjs';

/**
 * End the query to Armis
 *
 * @param {any} query
 * @returns
 */
export const endQuery = (payload) => ({ type: actionTypes.STOP_ARMIS, payload: payload });


/**
 * Do a query to Armis for guessing
 *
 * @param {any} payload
 */
export const doQuery = (payload) => ({ type: actionTypes.QUERY, ...payload });


/**
 * Set a notifications in state
 *
 * @param {any} payload
 */
export const setNotification = (payload) => ({ type: actionTypes.PAYLOAD, payload: payload });


/**
 * Delete a notifications in state
 *
 * @param {any} payload
 */
export const deleteNotification = (payload) => {
  return({ type: actionTypes.SET_NOTIFICATIONS, index: payload })
};


/**
 * Do query to Armis Epic
 *
 * @param {any} payload
 */
export const doQueryEpic = (action$) =>
  action$.ofType(actionTypes.QUERY)
    .debounceTime(1000)
    .map(query => {
      return { type: actionTypes.RUN_ARMIS, query: query.payload };
    });


/**
 * Set payload when Armis get results
 *
 * @param {any} payload
 */
export const setPayloadEpic = (action$) =>
  action$.ofType(actionTypes.STOP_ARMIS)
    .map(data => {
      return { type: actionTypes.PAYLOAD, payload: data.payload };
    });


/**
 * Set payload when Armis get results
 *
 * @param {any} payload
 */
export const setNotificationEpic = (action$) =>
  action$.ofType(actionTypes.PAYLOAD)
    .switchMap(data => {

      let notifications = data.payload.results.reduce((acc, obj) => {
        const { number, date, time } = obj;

        // if (date.length > 0 && time.length > 0 || number.length > 0) {
        let message = data.payload.speech;

        // customize it to bypass withCred true issue
        let response = Rx.Observable.ajax({
            url: `https://serene-ocean-30984.herokuapp.com/?text=REMINDER: ${message}`,
            crossDomain: true,
            createXHR: function () {
              return new XMLHttpRequest();
            }
        })
        .subscribe(_res => {
            // console.log(_res);
        });

        acc.push({
          message: message,
          time: (date.length > 0 && time.length > 0) ? `${date[0]} at ${time[0]}` : number[0]
        });

        // }

        return acc;
      }, []);

      return new Rx.Observable((observer) => {
        observer.next({ type: actionTypes.SET_NOTIFICATIONS, payload: notifications });
      });
    });

/**
 * Set payload when Armis get results
 *
 * @param {any} payload
 */
export const deleteNotificationEpic = (action$) =>
  action$.ofType(actionTypes.SET_NOTIFICATIONS)
    .map(data => {
      return { type: actionTypes.DELETE_NOTIFICATION, index: data.index };
    });


