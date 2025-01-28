function example() {
    let x = 10; // Block-scoped variable

    if (true) {
        var x = 20; // Error: Identifier 'x' has already been declared
    }
}