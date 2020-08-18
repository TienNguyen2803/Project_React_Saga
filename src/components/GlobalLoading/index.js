import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import loading from "./../../assets/images/loading.gif";
import { compose } from "redux";
import { connect } from "react-redux";
class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let html = null;
    if (showLoading) {
      html = (
        <div className={classes.globalLoading}>
          <img src={loading} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return html;
  }
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
