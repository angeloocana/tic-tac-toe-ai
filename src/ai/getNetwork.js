import { Network, Layer } from 'synaptic';

/**
 * Get AI Neural Network
 * @return {*} Neural Network
 */
const getNetwork = () => {
  const inputLayer = new Layer(18);
  const hiddenLayer = new Layer(9);
  const outputLayer = new Layer(9);

  inputLayer.project(hiddenLayer);
  hiddenLayer.project(outputLayer);

  return new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
  });
};

export default getNetwork;
