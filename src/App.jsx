import React, { useState, useEffect } from "react";
import Worker from "./test.worker.js";

const workerCheck = window.Worker ? "Worker detected!" : "No worker!";

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
    <React.Fragment>
      <p>{workerCheck}</p>
      <ul>
        {statuses.map((status, idx) => (
          <li key={idx}>{status}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default App;
