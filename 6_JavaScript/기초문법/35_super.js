class Parent{
    name = 'Jeong';

    constructor(name){
        this.name = name;
    }

    hello(){
        console.log('hello',this.name);
    }
}

class Child extends Parent {
    age = 24;

    constructor(name,age){
        super(name); //부모의 생성자를 사용
        this.age = age;
    }

    hello(){
        console.log('hello',this.name,this.age);
    }
}

const p = new Parent('mingyu');
const c = new Child('mingyu_jeong',24);
console.log(p,c); //Parent {name: 'mingyu'} Child {name: 'mingyu_jeong', age: 24}
c.hello(); //hello mingyu_jeong 24