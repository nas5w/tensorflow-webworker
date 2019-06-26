import React, { useState } from "react";
import Worker from "./tensorflow.worker.js";

const myWorker = new Worker();
myWorker.postMessage(null);

const App = () => {
  const [statuses, setStatuses] = useState([]);

  myWorker.onmessage = e => {
    setStatuses([...statuses, e.data]);
  };

  return (
    <ul>
      {statuses.map((status, idx) => (
        <li key={idx}>{status}</li>
      ))}
    </ul>
  );
};

export default App;
