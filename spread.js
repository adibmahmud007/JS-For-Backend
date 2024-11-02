
/**
 * Spread operator is used to separate the elements from the array and make them use individually.
 * lets see some examples
 */


const numbers= [2,13,25,3,4,5,45,78,56,98,6,8];//here the numbers are in array 


const big=Math.max(...numbers);//now the array elements are separate from the array and we can use them easily;

console.log(big);//here we are getting the max value of the array

// console.log(arraymax);

//The spread operator is also used in array copying

const nums1=[2,4,5,6,9];
console.log(nums1);
const nums2=[...nums1];//separating from the array and also coping the values to nums2
console.log(nums2);
nums2.push(234); //pushing value to nums2 only 
console.log(...nums2);

//advanced

const nums3=[...nums1,45]// add extra element while copying
 console.log(nums3);