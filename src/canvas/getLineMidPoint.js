import { head } from 'ramda';

const x = head;
const y = p => p[1];

/**
 * Get line middle point by percentage 0.1 === 10%
 * @sig [Number] -> [Number] -> Number -> [Number]
 * @param {[Number]} from from [x, y]
 * @param {[Number]} to to [x, y]
 * @param {Number} percentage Percentage 0% -> 100%
 * @return {[Number]} Mid point [x, y]
 */
const getLineMidPoint = (from, to, percentage) => {
  const per = percentage / 100;
  return [
    x(from) + ((x(to) - x(from)) * per), // middle X
    y(from) + ((y(to) - y(from)) * per) // middle Y
  ];
};

export default getLineMidPoint;
