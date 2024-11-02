// let in js
// we can change the value assigned to a let type

let a=25;
a=50;
console.log(a)// here the output will be 50 because of reassign of variable

//but in constant we cant assign a value to an existing variable like let

const b=20;
// b=11; this is not possible
console.log(b)



/**
 * Default parameter for not provided values
 * If we set any default parameter of any value then it will count it
 * if we provide value of one number and dont set any default parameter then 2nd value will be undefined and the sum will be NaN(not a number)
 */

function add( num1 , num2=0){
    const sum= num1 + num2;
    console.log(sum);
}

add(3,5);
add(4);//here the ans will be 4 only
add();//here the ans will be NaN because we didnt provide any default value for num1