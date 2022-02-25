import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


export default class NotificationItem extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func
  }

  static defaultProps  = {
    type: 'default',
    markAsRead: () => undefined
  }

  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead () {
    this.props.markAsRead(this.props.keyId);
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
            onClick={ this.markAsRead }
        >
          { this.checkhtml() }
        </li>
      </>
    )
  }
}
