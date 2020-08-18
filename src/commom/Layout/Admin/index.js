import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import DashBoard from "../../../components/DashBoard";
import styles from "./styles";

class AdminLayout extends Component {
  render() {
    const {  path, component: AdminComponent, exact } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        render ={ routeProps => {
          return (
            <DashBoard>
              <AdminComponent {...routeProps} />
            </DashBoard>
          );
        }}
      ></Route>
    );
  }
}

export default withStyles(styles)(AdminLayout);
