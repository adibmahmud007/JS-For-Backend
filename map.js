const numbers=[4, 6, 7, 1, 10];

const doubled=[];

for(const num of numbers){
    const double=num*2;
    doubled.push(double);
}

console.log(Math.max(...doubled));