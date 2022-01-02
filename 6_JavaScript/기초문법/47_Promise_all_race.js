function p(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve(ms);   // resolve 실행
           //reject(new Error('reason'));  //reject가 실행
        }, ms);
    });
}

(async function main() {
    const results = await Promise.all([p(1000),p(2000),p(3000)]);
    console.log(results); //[1000, 2000, 3000]
})();


(async function main() {
    const result = await Promise.race([p(1000),p(2000),p(3000)]);
    console.log(result); //1000
})();