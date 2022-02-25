import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgClose from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import {StyleSheet, css} from 'aphrodite';


export default class Notifications extends Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps  = {
    displayDrawer: false,
    listNotifications: []
  }

  constructor (props) {
    super(props);
    this.logClick = this.closeNotifications.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length ){
      return true;
    }
    return false;
  }

  markAsRead = id => {
    console.log(`Notification ${id} has been marked as read`);
  }

  closeNotifications () {
    console.log("Close button has been clicked");
  }

  renderNotification = x =>
    <NotificationItem key={ x.id } keyId={ x.id } type={ x.type }
    value={ x.value } html={ x.html } markAsRead={ this.markAsRead }/>

  generateList = () => {
    if (this.props.listNotifications.length <= 0) {
      return (<li>No new notification for now</li>);
    }
    return this.props.listNotifications.map(this.renderNotification)
  }
  
  render() {
    return <>
    <div className={ css(styles.menuItem) }>
        <p className={ css(styles.p) }>Your notifications</p>
    </div>
    { this.props.displayDrawer ? <div className={ css(styles.notifications) }>
      <button aria-label="Close"
              onClick={ this.closeNotifications }
              style={
                {position: "absolute",
                top: 10,
                right: 10,
                visibility: "hidden"}
              }
      >
      <img alt="close" src={imgClose}
            style={
              {visibility: "visible",
              height: "15px",
              width: "15px"}
            }
      />
      </button>
      { this.props.listNotifications?.length > 0  ? <p>Here is the list of notifications</p> : null}
      <ul>
        { this.generateList() }
      </ul>
    </div> : null }
    </>
  }
}

const styles = StyleSheet.create({
  notifications: {
    padding: '30px 5px',
    border: '1px solid #E0354B',
    borderStyle: 'dashed',
    marginBottom: '20px',
    position: 'absolute',
    top: '37px',
    right: 0,
    textAlign: 'left',
    marginRight: '10px',
    padding: '20px 20px',
    zIndex: 1,
    backgroundColor: 'white',
    '@media (max-width: 900px)': {
      top:0,
      left: 0,
      margin: '0px',
      width: '100%',
      height: '100%',
      fontSize: '20px'
    }
  },
  menuItem: {
    top: 0,
    right: '0px',
    textAlign: 'right',
    margin: '10px',
    position: 'absolute',
    zIndex: 1
  },
  p: {
      paddingBottom: '10px'
  }
});
