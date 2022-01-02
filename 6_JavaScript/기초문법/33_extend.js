class Parent{
    name = 'Jeong';

    hello(){
        console.log('hello',this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();
console.log(p,c) //Parent {name: 'Jeong'} Child {name: 'Jeong'}

c.hello(); //hello Jeong
c.name = 'mingyu';
c.hello(); //hello mingyu