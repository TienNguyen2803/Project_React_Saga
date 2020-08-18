import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../commom/Theme";
import { Provider } from "react-redux";
import configStore from "../../redux/configStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ADMIN_ROUTES } from "../../constants/index";
import AdminLayout from "../../commom/Layout/Admin";
import CssBaseline from '@material-ui/core/CssBaseline';


const store = configStore();
class App extends Component {
  renderRoute = () => {
    let html = null;
    html = ADMIN_ROUTES.map((route, index) => {
      return (
        <AdminLayout
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      );
    });
    return html;
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ToastContainer />
            <Switch>{this.renderRoute()}</Switch>
            <GlobalLoading />
            {/* <App /> */}
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
