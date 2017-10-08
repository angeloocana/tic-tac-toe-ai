const addFrame = (type) => (frames, data) =>
  frames.concat({ type, data });

export default addFrame;
