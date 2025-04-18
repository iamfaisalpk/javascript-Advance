function call(name){
    console.log("your really be my..but im afraid to tell you "+ name)
}

function back(callback){
    let name = "you";

    callback(name)
}

back(call)

// callback hell

console.log("start");

function get(callback){
    setTimeout(()=>{
        callback(5);
    },1000);
}
function get1(callback){
    setTimeout(()=>{
        callback(6);
    },1000);
}
function get2(callback){
    setTimeout(()=>{
        callback(7);
    },1000);
}

get((value)=>{
    get1((get1Value)=>{
        get2((get2Value)=>{
            console.log(get1Value + get2Value + value);
        })
    })
});

console.log("end");
