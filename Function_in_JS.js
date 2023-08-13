console.log("This is tutorial about functions in Javasript");

function greet(name, greetText="Greetings from JavaScript"){
    // let name = "Aqeel";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
//     // This line will never execute (Unreachable code)
//     // console.log("Function is returned");
}


// let name0 = "Aqeel";
// let name1 = "Ali";
// let name2 = "Ahmed";
// let name3 = "Aleem";
// let greetText1 = "Good Morning";
// greet(name0, greetText1);
// greet(name1);
// greet(name2, greetText1);
// let returnVal = greet(name3);
// console.log(returnVal)

let returnVal = sum(1,2,3);
console.log(returnVal)
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy"); 