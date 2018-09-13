/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {

  if(typeof str !== 'string'){
  	throw;
  }
  if(!str){
  	return '';
  }
  let arr = str.split('');
  arr = arr.reverse();
  let res = '';
  arr.forEach(funtion(item){
  	res += item;
  });
  return res;
};

export default turnMeBaby;
