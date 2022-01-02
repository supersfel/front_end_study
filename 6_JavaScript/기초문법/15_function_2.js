mingyu();
mingyu2(); // hoisting에 의해 올라는 가지만 변수로 인식해서 안된다.

function mingyu() {
    console.log('mingyu');  
}



var mingyu2 = function () {
    console.log('mingyu2');
}
