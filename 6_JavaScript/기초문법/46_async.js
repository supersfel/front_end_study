function p(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve(ms);   // resolve 실행
           //reject(new Error('reason'));  //reject가 실행
        }, ms);
    });
}

p(1000)
    .then(() => p(1000))
    .then(() => p(1000))
    .then(() => {
     console.log('3000ms 후 실행')
    });

(async function main() {
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000ms 후 실행')
})();