import Result from 'folktale/result';

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
    case 0: return Result.Ok({ x: 0, y: 0 });
    case 1: return Result.Ok({ x: 1, y: 0 });
    case 2: return Result.Ok({ x: 2, y: 0 });
    case 3: return Result.Ok({ x: 0, y: 1 });
    case 4: return Result.Ok({ x: 1, y: 1 });
    case 5: return Result.Ok({ x: 2, y: 1 });
    case 6: return Result.Ok({ x: 0, y: 2 });
    case 7: return Result.Ok({ x: 1, y: 2 });
    case 8: return Result.Ok({ x: 2, y: 2 });
    default: return Result.Error(`Invalid position index: ${index}`);
  }
};

export default getXYFromIndex;

