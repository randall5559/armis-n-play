'use strict';

import React from 'react';
import IconButton from 'material-ui/IconButton';
import Face from 'material-ui/svg-icons/notification/event-available';
import AppBar from 'material-ui/AppBar';


const styles = {
    iconStyles: {
        height: '45px',
        width: '45px',
        color: 'white'
    }
}


export default class Header extends React.Component {

    /**
     * Render component
     *
     * @returns
     * @memberof Header
     */
    render() {
        return (
            <header>
                <AppBar
                    title="Armis n Play - Notifications"
                    iconElementLeft={<Face style={ styles.iconStyles } />}
                />
            </header>
        );
    }
}