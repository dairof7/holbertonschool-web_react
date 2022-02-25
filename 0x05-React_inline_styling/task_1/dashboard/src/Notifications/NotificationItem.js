import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';


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
    markAsRead: () => void(0)
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
    let style = css(styles.defaultPriority);
    if (this.props.type === "urgent") {
      style = css(styles.urgentPriority);
    }
    return (
      <>
        <li className={style} data-notification-type={ this.props.type }
            dangerouslySetInnerHTML={ this.props.html }
            onClick={ this.markAsRead }
        >
          { this.checkhtml() }
        </li>
      </>
    )
  }
}

const styles = StyleSheet.create({
  defaultPriority: {
        color: "#1d0563"
  },
  urgentPriority: {
        color: "#ff0200"
  }
});
