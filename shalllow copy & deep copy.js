// normal

// let num1 =10;
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num1 = 20;
// num2 = false;
// console.log()
// console.log(num1);
// console.log(num2);

// shallow copy

// let oruKadha = ['aval','pirinju'];
// let oruKadha1 = oruKadha;

// console.log(oruKadha);
// console.log(oruKadha1);

// oruKadha.push('njnalla','aval');

// console.log();
// console.log(oruKadha);
// console.log(oruKadha1);

// deep copy

// let oruKadha = ['aval','pirinju'];
// let oruKadha1 = JSON.parse(JSON.stringify(oruKadha));

// console.log(oruKadha);
// console.log(oruKadha1);

// oruKadha.push('njnalla','aval');

// console.log();
// console.log(oruKadha);
// console.log(oruKadha1);

// object il shaloow copy

// let emp1 = {
//     name : "faisal",
//     company : "faizy"
// }

// emp2 = emp1;

// console.log(emp1);
// console.log(emp2);

// object il deep copy

let emp1 = {
    name : "faisal",
    company : "meta"
}

emp2 = JSON.parse(JSON.stringify(emp1));

console.log(emp1);
console.log(emp2);

emp1.name ='faisal';

console.log()
// console.log(emp1);
// console.log(emp2);

