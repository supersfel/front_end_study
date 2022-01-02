const a = {};

console.log(a,typeof a);

const b = {
    name : 'mingyu',
};

console.log(b, typeof b);

const c = {
    name : 'mingyu',
    hello(){
        console.log('mingyu',this.name);
    },
    hello2 : function () {
        console.log('mingyu2',this.name);
    },
    hello3 : () => {
        console.log('mingyu3',this.name);
    },
};

c.hello(); // mingyu mingyu
c.hello2();// mingyu2 mingyu
c.hello3();// mingyu3 undefined