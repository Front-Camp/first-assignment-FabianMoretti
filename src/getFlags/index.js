/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  let res = [];
  arr.forEach(function(item){
  	item.flags.forEach(function(flag){
  		res.push(flag);
  	})
  });
  return res;
};

export default getFlags;
