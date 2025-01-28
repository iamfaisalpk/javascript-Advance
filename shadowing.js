let x = 10; // Outer variable

function example() {
    let x = 20; // Inner variable (shadows the outer one)
    console.log(x); // Outputs 20 (inner variable is used)
}

example();
console.log(x); // Outputs 10 (outer variable is still intact)
