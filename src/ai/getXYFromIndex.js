/**
 * Get {x, y} coordinates from index
 * 
 * x,y:
 * 
 * 0,0  1,0  2,0
 * 
 * 0,1  1,1  2,1
 * 
 * 0,2  1,2  2,2
 * 
 * @param {Number} index position index 0 to 8
 * @return {*} {x,y}
 */
const getXYFromIndex = (index) => {
  switch (index) {
    case 0: return { x: 0, y: 0 };
    case 1: return { x: 1, y: 0 };
    case 2: return { x: 2, y: 0 };
    case 3: return { x: 0, y: 1 };
    case 4: return { x: 1, y: 1 };
    case 5: return { x: 2, y: 1 };
    case 6: return { x: 0, y: 2 };
    case 7: return { x: 1, y: 2 };
    case 8: return { x: 2, y: 2 };
    default: return null;
  }
};

export default getXYFromIndex;
