import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  TextField,
  Typography,Checkbox,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signUp}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">Đăng ký</Typography>
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
                <TextField
                  id="cpassword"
                  label="Confirm Password"
                  className={classes.cpassword}
                  fullWidth
                  margin="normal"
                  type="password"
                />
                <FormControlLabel
                  control={<Checkbox value="agree"  name="checkbox"/>}
                  label="Tôi đã đọc chính sách và đồng ý điều khoản"
                  className={classes.fullWidth}
                  
                />
                <Button variant="contained" color="primary" fullWidth type="submit">
                  SignUp
                </Button>
                <div className="mt-1 text-md-center">
                  <Link to='/login'> 
                  <Button  color="primary">
                      Tôi đã có tài khoản
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

export default withStyles(styles)(SignUp);
