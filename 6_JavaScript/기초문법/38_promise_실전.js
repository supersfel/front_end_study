function p() {
    return new Promise((resolve,reject)=>{
        /*pending*/
        setTimeout(() =>{
            reject(new Error('no reason'));
        }, 1000);   
         
    });     
}

p()
    .then((message) =>{ 
    console.log('1000ms 후에 resolve됩니다.',message)
    })
    .catch((error) =>{
    console.log('1000ms 후에 rejected됩니다.',error)
    })
    .finally(() =>{
    console.log('end')
    });
