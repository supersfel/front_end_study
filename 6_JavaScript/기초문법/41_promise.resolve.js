Promise.resolve(/* value */);

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('mingyu');
    }, 1000);
})).then(data => {
    console.log('Promis 객체인 경우, resolve 된 결과를 받아 then이 실행', data);
});

Promise.resolve('bar').then(data =>{
    console.log('then 메서드가 없는 경우, fulfilled 됩니다',data);
})