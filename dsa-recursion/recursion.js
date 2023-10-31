/** product: calculate the product of an array of numbers. */

function product(nums) {
  let product = 1;
  for (let i=0; i< arr.length; i++) {
      product *= arr[i];
  }
  return product;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
let result = '';
for (let i = 0; i < str.length; i+= 2){
  result =+ str[i]
}
return result;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  const originalStr = str.toLowerCase().replace([\W_]/gatherStrings, '');
  const reversedStr = originalStr.split('').reverse().join('');
  return originalStr === reversedStr;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++){
    if (array[i] === string) {
       
    }
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return str.split('').reverse().join('');
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArray = [];

  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          stringsArray.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          stringsArray = stringsArray.concat(gatherStrings(obj[key]));
      }
  }

  return stringsArray;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(array, target) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
      let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

      if (array[middleIndex] === target) {
          return middleIndex; // Target found
      } else if (array[middleIndex] < target) {
          startIndex = middleIndex + 1; // Search in the right half
      } else {
          endIndex = middleIndex - 1; // Search in the left half
      }
  }

  return -1; // Target not found
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
