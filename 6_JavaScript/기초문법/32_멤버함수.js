class A{
    hello(){
        console.log('mingyu');
    };

    hello2(){
        console.log('mingyu2');
    };
}

new A().hello();
new A().hello2();

class B{
    name = 'mingyu';
    hello(){
        console.log('hello', this.name);
    }
}

new B().hello();