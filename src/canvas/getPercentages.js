import { concat, memoize, last } from 'ramda';

/**
 * Get percentages steps
 * 
 * Example per 20% => [0 20 40 60 80 100]
 * @param {Number} per Percentage to increment
 * @param {[Number]} percentages Percentages step list
 * @return {[Number]} Percentages step list
 */
const _getPercentages = (per, percentages) => {
  const newPer = per + last(percentages);
  return newPer < 100
    ? _getPercentages(per, concat(percentages, [newPer]))
    : concat(percentages, [100]);
};

/**
 * Get percentages steps
 * 
 * Example per 20% => [0 20 40 60 80 100]
 * @sig Number -> [Number]
 * @param {Number} per Percentage to increment
 * @return {[Number]} Percentages step list
 */
const getPercentages = memoize((per) => _getPercentages(per, [0]));

export default getPercentages;
