import { Drawer, List, ListItem, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import { ADMIN_ROUTES } from "../../../constants/index";
import { NavLink } from "react-router-dom";

class SideBar extends Component {

  renderList = () => {
    const { classes } = this.props;
    let html = null;
    html = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item, index) => {
            return (
              <NavLink to={item.path} exact = {item.exact} key={index} className={classes.menuLink} activeClassName={classes.menuLinkActive}>
                <ListItem  className={classes.listItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return html;
  };
  render() {
    const { classes , onOpen } = this.props;
    return (
      <Drawer
        variant="persistent"
        open={onOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideBar);
