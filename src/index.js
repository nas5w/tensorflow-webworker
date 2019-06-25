import Worker from "./tensorflow.worker.js";

var myWorker = new Worker();

myWorker.postMessage(null);

myWorker.onmessage = function(e) {
  console.log(e.data);
};

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
