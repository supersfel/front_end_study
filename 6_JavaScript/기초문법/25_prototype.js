function Person(name,age) {
    this.name = name;
    this.age = age;
    // this.hello = function(){
    //     console.log('hello',this.name,this.age);
    // };
}

Person.prototype.hello = function () {
    console.log('hello',this.name,this.age);
}

const p = new Person('mingyu',24)
p.hello(); //hello mingyu 24
console.log(p.toString()); //[object Object]

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello); // 객체로 생성되어야지만 사용 가능

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);