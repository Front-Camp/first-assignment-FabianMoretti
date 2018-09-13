/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
	let res = 0;
	arr.forEach(function(item){
		if(typeof item === 'number' && item >=res){
			if(item !== Infinity && item !== -Infinity){
			res = item
		}
		}
	})
	return res;
  /* your logic here...*/
};

export default max;
