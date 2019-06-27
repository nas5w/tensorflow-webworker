import * as tf from "@tensorflow/tfjs";

onmessage = () => {
  try {
    postMessage("1");
    const model = tf.sequential();
    model.add(
      tf.layers.dense({ units: 100, activation: "relu", inputShape: [10] })
    );
    postMessage("2");
    model.add(tf.layers.dense({ units: 1, activation: "linear" }));
    model.compile({ optimizer: "sgd", loss: "meanSquaredError" });
    postMessage("3");

    const xs = tf.randomNormal([100, 10]);
    const ys = tf.randomNormal([100, 1]);
    postMessage("4");

    model.fit(xs, ys, {
      epochs: 100,
      callbacks: {
        onEpochEnd: (epoch, log) =>
          postMessage(`Epoch ${epoch}: loss = ${log.loss}`)
      }
    });
    postMessage("5");
  } catch (e) {
    postMessage(e);
  }
};
