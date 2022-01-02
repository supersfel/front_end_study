function A() {
    this.name = 'mingyu';
}

const a = new A();

console.log(a);


function B() {
    this.hello = function () {
        console.log('hello');
    }
    this.name = 'mingyu'
}

const b = new B();
b.hello();
console.log(b.name);