function p() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p()
    .then(() => {
        console.log('1000ms 후에 fulfilled 됩니다.');
        return p();
    })
    .then(() => p()) //arrow 특성
    .then(p)
    .then(() => {
        console.log('4000ms 후에 fulfilled 됩니다.');
    });