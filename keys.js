 const glass={  // here the left side of the collon is called keys and right side is called values
    name: "glass",
    color: "golden",
    price: 100,
    isCleaned: true
 }

// get the values of an object

const keys=Object.keys(glass);
console.log(keys);

//get the values of the object

const Values= Object.values(glass);
console.log(Values);

//now get the values and keys together as element

const element=Object.entries(glass)
console.log(element);//here we get the entries as array

//delete in object

delete glass.isCleaned;
console.log(glass)

//delting using destructureing

const {price,...tk}=glass;
console.log(tk)

//freeze

Object.freeze(glass);
//now any changes to the object glass will not happen 
// the changes below will not happen
 delete glass.name;
 glass.source='bangladesh';
 console.log(glass);

