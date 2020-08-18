import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/index";
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
