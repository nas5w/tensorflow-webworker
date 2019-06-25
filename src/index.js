import Worker from "./tensorflow.worker.js";

var myWorker = new Worker();

myWorker.postMessage(null);

myWorker.onmessage = function(e) {
  console.log(e.data);
};
