function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000),p(2000),p(3000)]).then((message) => {
    console.log('가장먼저 fulfilled된 이후 실행',message);
})   //가장먼저 fulfilled된 이후 실행 1000