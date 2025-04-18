// callback promise

// function get1(num){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res (num);
//         },1000)
//     });
// }
// function get2(num){
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             callback(num);
//         },1000);
//     });
// }

// get1(5).then((response)=>{
//     return get2(response + 5);
// }).then((response)=>{
//     console.log(response);
// })

                           /*  promise  */

const promise = new Promise((res,rej)=>{
    rej("failed");
});

promise.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
});

                    /* All  method */

// const promise1 = new Promise((res,rej)=>{
//     res (["java script","java"]);
// })
// const promise2 = new Promise((res,rej)=>{
//     res (["c","c++"]);
// })
// const promise3 = new Promise((res,rej)=>{
//     res (["python","php"]);
// })

// const allPromise = Promise.all([promise1,promise2,promise3]);

// allPromise.then((Response)=>{
//     console.log(Response.flat(Infinity));
    
// }).catch((err)=>{
//     console.log(err);
// });

                    /* any */

// const promise1 = new Promise((res,rej)=>{
//     res (["java script","java"]);
// })
// const promise2 = new Promise((res,rej)=>{
//     res (["c","c++"]);
// })
// const promise3 = new Promise((res,rej)=>{
//     res (["python","php"]);
// })

// const allPromise = Promise.any([promise1,promise2,promise3]);

// allPromise.then((Response)=>{
//     console.log(Response.flat(Infinity));  
// }).catch((err)=>{
//     console.log(err);
// });

                        /* race */

    // const promise1 = new Promise((res,rej)=>{
    //     res (["java script","java"]);
    // })
    // const promise2 = new Promise((res,rej)=>{
    //     res (["c","c++"]);
    // })
    // const promise3 = new Promise((res,rej)=>{
    //     res (["python","php"]);
    // })
    
    // const allPromise = Promise.race([promise1,promise2,promise3]);
    
    // allPromise.then((Response)=>{
    //     console.log(Response.flat(Infinity));  
    // }).catch((err)=>{
    //     console.log(err);
    // });