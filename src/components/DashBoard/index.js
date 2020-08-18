import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Header from "./Header";
import SideBar from "./SideBar";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as actionUI from "../../actions/ui";
import cn from "classnames";
import { withRouter } from "react-router-dom";
class DashBoard extends Component {
  handleOnToggleSideBar = () => {
    const { onOpen, onActSideBar } = this.props;
    const { showSideBar, hideSideBar } = onActSideBar;
    if (onOpen) {
      hideSideBar();
    } else {
      showSideBar();
    }
  };

  handleLogout = () => {
    const {history} = this.props;
    history.push('/login');
  };

  render() {
    const { children, classes, onOpen, name } = this.props;
    return (
      <div className={classes.dashBoard}>
        <Header
          onToggleSideBar={this.handleOnToggleSideBar}
          handleLogout={this.handleLogout}
          name ={name}
        >
          {" "}
        </Header>
        <div className={classes.warapper}>
          <SideBar onOpen={onOpen}></SideBar>
          <div
            className={cn(classes.warapperContent, {
              [classes.shiftLeft]: onOpen === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    onOpen: state.ui.showSideBar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onActSideBar: bindActionCreators(actionUI, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect , withRouter)(DashBoard);
