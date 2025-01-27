// try

// try {
//     // code
// }
// catch (error){
//     // catching error
// }
// finally {
//     // cleanup
// }

// throw

// function validate(age){
//     if(age <0){
//         throw new Error(`ntha mone jadayanooh`);
//     }
// }

// validate(-24);

try {
    // Code that might throw an error
    let result = 11 * 5;
    console.log(result); // Works fine, but let's throw an error for demo
    throw new Error("your thhe right but..");
} catch (error) {
    // Handles the error
    console.log("An error occurred:", error.message);
} finally {
    // Runs no matter what
    console.log(" complete.thanks");
}
