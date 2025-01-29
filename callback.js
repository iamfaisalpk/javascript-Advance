function call(name){
    console.log("yuor raelly "+ name);
}

function back(callback){
    let name = "F&J";

    callback(name);
}

back(call);