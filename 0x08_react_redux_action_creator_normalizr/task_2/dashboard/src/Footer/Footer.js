import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import {StyleSheet, css} from 'aphrodite';
import AppContext from "../App/AppContext";


function Footer() {
  return (
    <AppContext.Consumer>
      {
        context => {
          return (
            <>
              <p className={ css(styles.p) }>
                Copyright { getFullYear() } - { getFooterCopy() }
              </p>
              { context.user.isLoggedIn &&
                <p><a href="#" >Contact us</a></p>
              }
            </>
          );
        }
      }
    
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  p: {
    fontStyle: 'italic'
  }
});

export default Footer; 
