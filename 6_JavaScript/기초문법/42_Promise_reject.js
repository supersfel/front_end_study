Promise.reject(/*value*/);

Promise.reject(new Error('reason'))
    .then(error => {

    })
    .catch(error => {
        console.log(error);
    });