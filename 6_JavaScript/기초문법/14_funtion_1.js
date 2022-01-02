const mingyu = function(){
    console.log('mingyu');
};

mingyu();

const mingyu2 = function(name){
    console.log('mingyu2',name);
};

mingyu2('jeong');

const mingyu3 = function(name){
    return `mingyu3 ${name}`;
};

console.log(mingyu3('jeong'));