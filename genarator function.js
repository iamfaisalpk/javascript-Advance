function* fbal(){

    yield "player1";
    yield "player2";
    yield "player3";
    yield "player4";

    
}

let ob=fbal();

console.log(ob.next());
console.log(ob.next());
console.log(ob.next());
console.log(ob.next());

// values kittan

function* fbal(){

    yield "player1";
    yield "player2";
    yield "player3";
    yield "player4";

    
}

let obj=fbal();

console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
