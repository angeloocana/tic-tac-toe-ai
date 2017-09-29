import { Network, Layer } from 'synaptic';

const getNetwork = () => {
  const inputLayer = new Layer(9);
  const hiddenLayer = new Layer(36);
  const outputLayer = new Layer(9);

  inputLayer.project(hiddenLayer);
  hiddenLayer.project(outputLayer);

  return new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
  });
};

export {
  getNetwork
};
