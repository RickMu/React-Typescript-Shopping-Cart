import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import rootStore from "./dux/rootStore";
import "./index.css";

ReactDOM.render(
<Provider store={rootStore}>
  <App />
</Provider>
, document.getElementById("root"));
