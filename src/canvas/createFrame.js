/**
 * Create frame
 * @sig String -> a -> b
 * @param {String} type frame type
 * @param {*} data frame data
 * @return {{type: String, data: *}} frame object
 */
const createFrame = (type, data) => ({ type, data });

export default createFrame;
