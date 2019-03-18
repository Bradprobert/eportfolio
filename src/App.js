import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core'

const styles = {
  app: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Typography>This is my eportfolio</Typography>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
