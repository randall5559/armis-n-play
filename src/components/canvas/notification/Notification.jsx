import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionCancel from 'material-ui/svg-icons/navigation/cancel';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Note from 'material-ui/svg-icons/av/note';
import Email from 'material-ui/svg-icons/communication/email';
import Sms from 'material-ui/svg-icons/communication/textsms';
import {green500, blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';


const styles = {
    paperStyles: {
        maxWidth: '300px',
        margin: 'auto'
    },
    paddingTopBottom: {
        padding: '20px 0'
    },
    paddingLeftRight: {
        padding: '0 20px'
    }
}


export default class Notification extends React.Component {

    /**
     * Render component
     *
     * @returns
     * @memberof Notification
     */
    render() {

        const { notifications, deleteNotification } = this.props;

        // create notification dom list
        const notificationsList = (notifications.length > 0) ?
            notifications.map((obj, id) =>
                <div key={id.toString()}>
                    <ListItem
                        leftAvatar={<Avatar icon={<Note />} backgroundColor={green500} />}
                        rightIcon={<ActionCancel />}
                        primaryText={obj.message}
                        secondaryText={obj.time}
                        onClick={ () => deleteNotification(id) }
                    />
                </div>
            ) :
            (
                <p style={ styles.paddingLeftRight }>
                    You currently have no Notificaitons added to your list. Type one out below to get started.
                </p>
            );

        return (
            <Paper style={ styles.paperStyles }>
                <List>
                    <Subheader style={{...styles.paddingTopBottom, ...styles.paddingLeftRight }}>Notifications</Subheader>
                    { notificationsList }
                </List>
            </Paper>
        )
    }
}
