function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

c(() => {
    console.log('1000ms 후에 callback 함수가 실행');
})

c(() => {
    c(() => {
        console.log('2000ms 후에 callback 함수가 실행');
    })
})

c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback 함수가 실행');
        })
    })
})