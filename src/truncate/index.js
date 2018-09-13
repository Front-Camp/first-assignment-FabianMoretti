/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
	if(!str)
	{
		throw;
	}
	if(!length){
		return str + replacer;
	}
	if(length >=str.length){
		return str;
	}
  var sub = str.substr(0, length-3);
  sub +=replacer;
  return sub;
};

export default truncate;
