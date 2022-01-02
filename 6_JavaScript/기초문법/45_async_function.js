function p(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           //resolve(ms);   // resolve 실행
           reject(new Error('reason'));  //reject가 실행
        }, ms);
    });
}


async function asyncP(){
    const ms = await p(1000);
    return 'mingyu: ' + ms;
}


(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch (error) {   
        console.log(error);
    } finally{
        console.log('end')
    }
})();