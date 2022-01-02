const mingyu = () => {
    console.log('mingyu');
};


const mingyu2 = name =>{
    console.log('mingyu2',name);
};

const mingyu3 = (name,age) => {
    console.log('mingyu3',name,age);
};

const mingyu4 = name =>{
    return `mingyu4 ${name}`;
}

const mingyu5 = name => `mingyu5 ${name}`;

mingyu();
mingyu2('jeong');
mingyu3('jeong','24');
console.log(mingyu4('jeong'));
console.log(mingyu5('jeong'));
