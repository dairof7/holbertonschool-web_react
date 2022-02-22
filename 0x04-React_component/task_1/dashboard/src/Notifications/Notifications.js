import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import imgClose from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export default class Notifications extends Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps  = {
    displayDrawer: false,
    listNotifications: []
  }
  
  closeNotifications () {
    console.log("Close button has been clicked");
  }
  generateList = () => {
    if (this.props.listNotifications.length <= 0) {
      return (<li>No new notification for now</li>);
    }
    return this.props.listNotifications.map((x) =>
      <NotificationItem key={x.id} type={x.type} value={x.value} html={x.html} />
    );
  }
  
  render() {
    return <>
    <div className="menuItem">
        <p>Your notifications</p>
    </div>
    { this.props.displayDrawer ? <div className="Notifications">
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

