import React, { Component } from 'react'

export default class NotificationItem extends Component {

  checkhtml() {
    if (this.props.html === undefined) {
      return this.props.value
    }
    return ;
  }
  render() {
    return (
      <>
        <li data-notification-type={ this.props.type }
            dangerouslySetInnerHTML={ this.props.html }
        >
          { this.checkhtml() }
        </li>
      </>
    )
  }
}
