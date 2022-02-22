import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class NotificationItem extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    })
  }

  static defaultProps  = {
    type: 'default'
  }

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
