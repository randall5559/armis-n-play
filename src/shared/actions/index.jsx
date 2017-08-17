import { combineEpics } from 'redux-observable';
import {
    endQuery,
    doQuery,
    setNotification,
    deleteNotification,
    doQueryEpic,
    setPayloadEpic,
    setNotificationEpic,
    deleteNotificationEpic } from './armis.actions.jsx';

const rootEpic = combineEpics(
    doQueryEpic,
    setPayloadEpic,
    setNotificationEpic,
    deleteNotificationEpic
);

export {
    endQuery,
    doQuery,
    setNotification,
    deleteNotification,
    rootEpic
};
