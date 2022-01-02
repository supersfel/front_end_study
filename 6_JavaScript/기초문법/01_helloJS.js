function Counter() {
    let count = 0;

    this.up = function () {
        return count++;
    };

    this.down = function () {
        return --count
    };
}



const counter = new Counter();

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());