

class Users{
    constructor(id,name){
         this.id=id;
         this.name=name;
        console.log(id);
        
    }
    badam(){
        console.log(`the id ${this.id} is eating ${this.name}`);
    }
}

const u=new Users(72,'badam');
u.badam();
// const details=u.user();
// console.log(details);
