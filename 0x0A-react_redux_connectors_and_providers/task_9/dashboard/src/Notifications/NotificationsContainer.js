import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from './Notifications';
import { fetchNotifications, setNotificationFilter, markAsAread } from "../actions/notificationActionCreators";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";

let _ = require('lodash');

export class NotificationsContainer extends PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.object,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    fetchNotifications: PropTypes.func,
    setNotificationFilter: PropTypes.func,
  }

  static defaultProps  = {
    displayDrawer: false,
    listNotifications: {},
    handleDisplayDrawer: () => void(0),
    handleHideDrawer: () => void(0),
    markNotificationAsRead: () => void(0),
    fetchNotifications: () => {},
    setNotificationFilter: () => {}
  }

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  } 

  
  render() {
    return <Notifications {...this.props}></Notifications>;
  }
}

export const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state),
  };
};

export const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
  setNotificationFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
