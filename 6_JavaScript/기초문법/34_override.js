class Parent{
    name = 'Jeong';

    hello(){
        console.log('hello',this.name);
    }
}

class Child extends Parent {
    age = 24;
    hello(){
        console.log('hello',this.name,this.age);
    }
}

const p = new Parent();
const c = new Child();
console.log(p,c); //Parent {name: 'Jeong'} Child {name: 'Jeong', age: 24}
p.hello(); //hello Jeong
c.hello(); //hello Jeong 24