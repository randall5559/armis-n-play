'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Armis from 'armis';

import Header from './header/Header.jsx';
import Canvas from './canvas/Canvas.jsx';
import Message from './message-box/Message.jsx';

import '../styles/main.scss';

export default class App extends React.Component {


    /**
     * Creates an instance of App component
     *
     * @memberof App
     */
    constructor() {
        super();

        // init Armis with notification context
        this.armis = new Armis([], 'all');
    }


    /**
     * LifeCycle Hook: componentDidMount()
     *
     * @memberof App
     */
    componentDidMount() {
        this.armis.on('guesses', (data, done) => {
            done(data);
        });

        this.armis.on('error', (err, done) => {
            console.log(err);
            done(err);
        });
    }


    /**
     * LifeCycle Hook: componentDidUpdate()
     *
     * @param {any} prevProps
     * @param {any} prevState
     * @memberof App
     */
    componentDidUpdate(prevProps, prevState) {
        const { query, run_query, payload, endQuery } = this.props;

        if (run_query) {
            this.armis.guess(query, endQuery);
        }
    }


    /**
     * Render component
     *
     * @returns
     * @memberof App
     */
    render() {
        const { query, doQuery, payload, notifications, deleteNotification } = this.props;

        return (
            <div className="container">
                <Header />
                    <Canvas
                        query={ query }
                        payload={ payload }
                        notifications={ notifications }
                        deleteNotification={ deleteNotification }
                    />
                <Message doQuery={ doQuery } />
            </div>
        );
    }
}