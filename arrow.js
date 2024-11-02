/**
 * Arrow function is the shortcut of the actual function
 * we can write the arrow function in the followin steps
 */

const add=(num1,num2)=> num1+num2;

 const sum=add(2,3);
 console.log(sum);

 //We can write this arrow func in normal way like 

 function add2(num1,num2){
    return num1+num2;

 }
 const sum2= add2(3,4);
 console.log(sum2);


 // single parameter arrow function

 const getage=person=> person.age;// here if we use single parameter we dont have to use bracket

 const student={
    name: "adib",
    age: 25
 }
 const age=getage(student);
 console.log(age);

const getThird=num=>num[2];

const arr=[2,3,12,34,3];
console.log(getThird(arr));

 //no parameter


 const getPI=()=> Math.PI;

 console.log(getPI(Math.PI));