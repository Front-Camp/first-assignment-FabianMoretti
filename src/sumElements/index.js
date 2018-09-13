/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
	let res = 0;
  arr.forEach(function(item){
  	 if(typeof item === 'number'){
      if(&& !isNaN(item) && item !== Infinity && item !== -Infinity){
        return;
      }
  	 	res += item;
  	 	return;
  	 }

     var strItem = +item;
     if(!isNaN(strItem)){
      res += strItem;
        return;
     }

  	 var floatItem = parseFloat(item)
  	 	if(!isNaN(floatItem)){
  	 		res += floatItem;
  	 		return;
  	 	}	
  	 var intItem = parseInt(item)
  	 	if(!isNaN(intItem)){
  	 		res += intItem;
  	 		return;
  	 	}
  	 
  	 
  });
  return res;
};

export default sumElements;
