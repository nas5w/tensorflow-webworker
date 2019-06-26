import { sequential, layers, randomNormal } from "@tensorflow/tfjs";

onmessage = () => {
  const model = sequential();
  model.add(layers.dense({ units: 100, activation: "relu", inputShape: [10] }));
  model.add(layers.dense({ units: 1, activation: "linear" }));
  model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

  const xs = randomNormal([100, 10]);
  const ys = randomNormal([100, 1]);

  model.fit(xs, ys, {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, log) =>
        postMessage(`Epoch ${epoch}: loss = ${log.loss}`)
    }
  });
};
