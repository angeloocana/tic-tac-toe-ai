/**
 * Get line middle point by percentage 0.1 === 10%
 * @param {*} p1 from
 * @param {*} p2 to
 * @return {Function} (percentage) => Mid point [x, y]
 */
const getLineMidPoint = (p1, p2) => (per) =>
  [
    p1[0] + ((p2[0] - p1[0]) * per),
    p1[1] + ((p2[1] - p1[1]) * per)
  ];

export default getLineMidPoint;
