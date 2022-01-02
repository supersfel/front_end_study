class A{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

console.log(new A('mingyu',24)); //A {name: 'mingyu', age: 24}


class B{ //지원안하는 경우도 있다.
    name;
    age;
}

console.log(new B()); //B {name: undefined, age: undefined}

class C{
    name = 'no name';
    age = 0;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('mingyu',24)); //C {name: 'mingyu', age: 24}


class D{
    name = 'no name';
    age = 0;   
}

console.log(new D()); //D {name: 'no name', age: 0}