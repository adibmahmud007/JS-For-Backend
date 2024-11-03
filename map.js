const numbers=[4, 6, 7, 1, 10];

// const doubled=[];

// for(const num of numbers){
//     const double=num*2;
//     doubled.push(double);
// }

const doubleIt=num=>{
    // console.log('number now',num);
    return num*2;
}

const res= numbers.map(doubleIt)// map just loop through the array and do the work of 
//call back function that i told him to do in the function
//holds the results of each operation and returns the array
// console.log(...res);
// console.log(Math.max(...doubled));

const output=numbers.map(n=>n*2);
console.log(output)

//more maps operations

const friends=['adib','tawhid','nijhu','hoga'];

const length=friends.map(frnd=> frnd.length); // here frnd is each element of arrray and it is getting the length of each elemnt of array
const firstChar=friends.map(frnd=> frnd[0]);//here frnd is each element of the array and frnd[0] is getting the first character of each element
console.log(firstChar)
console.log(length)