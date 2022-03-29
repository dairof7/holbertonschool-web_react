import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFullYear, getFooterCopy } from '../utils/utils';
import {StyleSheet, css} from 'aphrodite';

function Footer(props) {
  const { user } = props;
  return (
          <footer>
            <p className={ css(styles.p) }>
              Copyright { getFullYear() } - { getFooterCopy() }
            </p>
            { user &&
              <p><a href="#" >Contact us</a></p>
            }
          </footer>
  );
}

const styles = StyleSheet.create({
  p: {
    fontStyle: 'italic'
  }
});

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: {},
};

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  }
}

export default connect(mapStateToProps, null)(Footer);
