// readline module: Traditional Way, compatible with both Node and Bun run-time env - Modern & Recommended Way
import readline from "node:readline/promises";

const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const singeLine: string = await rl.question('Enter a number: '); // use to take a single line of input
console.log(singeLine);
rl.close(); // closes the interface when done to stop the terminal from constantly listening for input, and preventing hanging of terminal.

rl.on("line", (input: string) => { // use to take a multiple lines of input
    if (input.toLowerCase() === "exit") {
        rl.close();
        return;
    }
    console.log(`You Typed: ${input}`);
});


// Easier Way for String inputs (compatible with Bun run-time env only) - NOT Recommended
// BUT can cause "double input" errors (forcing us to input value twice, due to mis-interpration of "Enter" key)
const name = prompt("What is your name?\n");
console.log(`Hello, ${name}!`);


// process.argv: To pass input as cmd-line arguments, when executing a file (js/ts) from Node/Bun
console.log(process.argv); 
//an array of arguments, whose 0th idx is path of run-time env, and 1st idx is path of script file (js/ts), and following indexes stores the passed arguments.
// For ex: in this cmd-line `bun src/input.ts hello I am Vinay` the args are "hello", "I", "am", "Vinay"


// process.stdin.on('data'): The Fastest and Lowest-Level form to take input from user, via terminal (Recommended for Fast-Performing Real-Time Applications, or Games)
process.stdin.on("data", (data: Buffer) => { // each characters are taken as an individual input, instead of taking multiple characters or lines as single input 
    const input = data.toString().trim();
    console.log(`Raw data received: ${input}`)
});


/* So these are the most widely recognized ways to take inputs from the terminal, among which `readline` module is the most popular and recommended choice (that too `readline/promises`), but for fastest possible inputs `process.stdin.on('data')` is the recommended way.

Just FYI, there are also 3rd-party specialized libraries used by developers, like: 
1. Inquirer.js or Enquirer: Used to create fancy menus, checkboxes, and password inputs in the terminal.
2. Clack: A modern, beautiful way to handle terminal inputs (widely used in the Next.js ecosystem).
*/