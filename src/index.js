import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept(
    "./index.js",
    "./tensorflow.worker.js",
    "index.html",
    function() {
      console.log("Accepting the updated index module!");
    }
  );
}
