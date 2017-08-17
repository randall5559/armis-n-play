'use strict';

import React from 'react';

import Notification from './notification/Notification.jsx'
import './canvas.scss';


export default class Canvas extends React.Component {

    /**
     * Render component
     *
     * @returns
     * @memberof Canvas
     */
    render() {
        const { query, payload, notifications, deleteNotification } = this.props;

        if (payload) {
            let node = new PrettyJSON.view.Node({
                el: document.querySelector('#json_payload'),
                data: payload,
                dateFormat:"DD/MM/YYYY - HH24:MI:SS"
            });
            node.collapseAll();
        }

        return (
            <main className="content">
                <div className={ payload ? 'results-box' : 'hide' }>
                    <h4>Results from Armis:</h4>
                    <p id="json_payload" ></p>
                </div>
                <div className="notifications-box">
                    <Notification notifications={ notifications } deleteNotification={ deleteNotification } />
                </div>
            </main>
        );
    }
}