import { Network, Layer } from 'synaptic';

/**
 * Get AI Neural Network
 * @return {*} Neural Network
 */
const getNetwork = () => {
  const inputLayer = new Layer(1);
  const hiddenLayer1 = new Layer(9);
  const hiddenLayer2 = new Layer(9);
  const outputLayer = new Layer(9);

  inputLayer.project(hiddenLayer1);
  hiddenLayer1.project(hiddenLayer2);
  hiddenLayer2.project(outputLayer);

  return new Network({
    input: inputLayer,
    hidden: [hiddenLayer1, hiddenLayer2],
    output: outputLayer
  });
};

export default getNetwork;
