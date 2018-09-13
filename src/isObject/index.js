/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
  let toString = {}.toString;
  let expected = '[object Array]';
  let actual =toString.call(data) 
	//alert( toString.call(data) ); // [object Array]
return expected === actual;
};

export default isObject;