function Person(){

}

Person.prototype.hello = function(){
    console.log('mingyu');
}

function Korean(region) {
    this.region = region;
    this.where = function(){
        console.log('where',this.region);
    };
}

Korean.prototype = Person.prototype;

const k = new Korean('Incheon');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);