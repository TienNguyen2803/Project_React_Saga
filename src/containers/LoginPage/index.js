import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">Đăng nhập</Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.password}
                  fullWidth
                  margin="normal"
                  type="password"
                />
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Đăng nhập
                </Button>
                <div className="mt-1 text-md-center">
                  <Link to='/signup'> 
                  <Button  color="primary">
                      Đăng ký tài khoản
                  </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
