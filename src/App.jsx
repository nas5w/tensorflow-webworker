import React, { useState } from "react";
import Worker from "./tensorflow.worker.js";

const App = () => {
  const [statuses, setStatuses] = useState([]);

  const myWorker = new Worker();
  myWorker.postMessage(null);
  myWorker.onmessage = e => setStatuses([...statuses, e.data]);

  return (
    <ul>
      {statuses.map((status, idx) => (
        <li key={idx}>{status}</li>
      ))}
    </ul>
  );
};

export default App;
