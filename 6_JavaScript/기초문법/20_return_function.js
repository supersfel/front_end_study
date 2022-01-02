function plus(base){
    return function(num){
        return base + num;
    }
}

const plus5 = plus(5);

console.log(plus5(12));  //17

const plus7 = plus(7);
console.log(plus7(7));   //14