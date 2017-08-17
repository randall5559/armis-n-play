'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';

import './message.scss';


const styles = {
    inputStyle: {
        color: 'white',
        padding: '0 10px'
    },
    hintStyle: {
        color: '#4DD0E1',
        padding: '0 10px',
    }
}


export default class Message extends React.Component {

    /**
     * Render component
     *
     * @returns
     * @memberof Message
     */
    render() {
        const { doQuery } = this.props;

        return (
            <footer className="message-box">
                    <TextField
                        inputStyle={ styles.inputStyle }
                        hintStyle={ styles.hintStyle }
                        hintText="Type A Reminder Message"
                        onChange={ (event, newValue) => doQuery({ payload: newValue })}
                        fullWidth={true}
                    />
            </footer>
        );
    }
}
