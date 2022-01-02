class A{
    _name = 'no name';

    get name(){
        return this._name + '@@@';
    }

    set name(value){
        this._name = value + '!!!';
    }
}

const a = new A();

console.log(a); //A {_name: 'no name'}
a.name = 'mingyu';
console.log(a); //A {_name: 'mingyu!!!'}
console.log(a.name); //mingyu!!!@@@ //get을통해서 가져옴
console.log(a._name);//mingyu!!! //그냥 변수를 가져옴

class B{
    _name = 'no name';

    get name(){
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b); //B {_name: 'no name'}
B.name = 'mingyu';
console.log(b); //B {_name: 'no name'}