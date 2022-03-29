import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
/**
 * this is a HOC Function.
 */
    class WithLogging extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;
    return WithLogging;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithLogging;