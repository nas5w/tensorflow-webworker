import React, { useState, useEffect } from "react";
import Worker from "./tensorflow.worker.js";

const myWorker = new Worker();
myWorker.postMessage(null);

const App = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    let canceled = false;

    if (!canceled) {
      myWorker.onmessage = e => setStatuses([...statuses, e.data]);
    }

    () => (canceled = true);
  }, [statuses]);

  return (
    <ul>
      {statuses.map((status, idx) => (
        <li key={idx}>{status}</li>
      ))}
    </ul>
  );
};

export default App;
