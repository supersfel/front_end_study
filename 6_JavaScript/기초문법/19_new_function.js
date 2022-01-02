function Person(name,age){
    console.log(this);
    this.name =name;
    this.age = age;
}

const a = new Person('mingyu',24);
console.log(a,a.name,a. age);

const b = new Person('old mingyu', 30);
console.log(b,b.name,b.age);

const cat = (name,age) => {
    this.name = name;
    this.age = age;
}

const c = new cat('나비',3);
console.log(c)