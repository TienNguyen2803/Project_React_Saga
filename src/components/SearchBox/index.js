import { TextField, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
class SearchBox extends Component {
  render() {
    const { classes, handlChange } = this.props;
    return (
      <form className={classes.container}>
        <TextField
          autoComplete="off"
          className={classes.textField}
          margin="normal"
          placeholder="Nhập từ khoá"
          onChange={handlChange}
        />
      </form>
    );
  }
}

export default withStyles(styles)(SearchBox);
