const data=[{id:1, name: 'adib', address: 'shiyal bari'}];

// console.log(data[0].address);

const products={
    count:5000,
    data: [
        {id:1,name:'lenovo',price:65000},
        {id:2,name:'macbook',price:165000}
    ]
}

// second product price
const macprice= products.data[1].price;
console.log(macprice);

const user={
    id:5001,
    name:'Adib mahmud',
    address:{
        street:{
            first: '54/1 uttor side',
            // second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

const secondAddress= user.address.street?.second;// here we use optinal chain as ? so if we get second after street then we will print it
//if we dont get it we will get undefined not an error

console.log(secondAddress)
