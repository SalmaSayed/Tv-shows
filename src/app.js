import React from "react";
import ReactDom from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";

ReactDom.render(<AppRouter />, document.getElementById("app"));
