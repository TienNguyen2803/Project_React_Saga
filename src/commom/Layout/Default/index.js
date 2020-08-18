import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import styles from "./styles";

class DefaultLayout extends Component {
  render() {
    const {  path, component: DefaultComponent, exact } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        render ={ routeProps => {
          return (
              <DefaultComponent {...routeProps} />
          );
        }}
      ></Route>
    );
  }
}

export default withStyles(styles)(DefaultLayout);
