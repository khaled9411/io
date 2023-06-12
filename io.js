const readline = require("readline");
const keypress = require("keypress");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Enable keypress events on the input stream
keypress(process.stdin);

// Listen for keypress events
process.stdin.on("keypress", function(ch, key) {
  if (key && key.name === "c" && key.ctrl) {
    // Exit the program if Ctrl+C is pressed
    process.exit();
  } else if (key && key.name === "return") {
    // Handle the input when the enter key is pressed
    const number = Number(rl.line);

    if (number > 50) {
      const result = number * 2;
      console.log(result);
    } else {
      console.log(number);
    }

    // Clear the input line
    rl.clearLine();
    rl.prompt();
  }
});

// Set raw mode for keypress events
process.stdin.setRawMode(true);

// Start listening for input
rl.prompt();
