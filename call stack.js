let callstack = "iam back";

function first(){
    let a ="hi!";
    second();
    console.log(`${a} ${callstack}`);
    
}

function second(){
    let b = "hey!"
    third();
    console.log(`${b} ${callstack}`);
    
}

function third(){
    let c = "hhlooi"
    console.log(`${c} ${callstack}`)
}

first();