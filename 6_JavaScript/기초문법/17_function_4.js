global.a = 0; //글로벌

{
    const a= 1;

    const test = new Function('return a');

    console.log(test());
}

{
    const a =2;
    const test = function() {
        return a;
    };

    console.log(test());
}