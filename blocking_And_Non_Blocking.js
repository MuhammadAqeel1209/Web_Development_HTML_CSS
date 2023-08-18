// Synchronous or blocking
// - line by line execution
// const fs = require("fs");
// let text = fs.readFileSync("dele.txt", "utf-8");
// text = text.replace("browser", "Rohan");

// console.log("The content of the file is")
// console.log(text);

// console.log("Creating a new file...")
// fs.writeFileSync("rohan.txt", text);


// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8" , (err,data)=>{
    console.log(err,data)
});
console.log("This is message")