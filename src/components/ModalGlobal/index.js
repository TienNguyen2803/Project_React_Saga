import React, { Component } from "react";
import { Modal, withStyles } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import styles from "./styles";
class ModalGlobal extends Component {
  render() {
    const { classes, onClose, component, title, showModal } = this.props;
    return (
      <Modal open={showModal} onClose={onClose}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <ClearIcon className={classes.icon} onClick={onClose}></ClearIcon>
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(ModalGlobal);
