const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown time in seconds: ", (input) => {
  let time = parseInt(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log("Press 's' anytime to stop the countdown.\n");

  let countdown = setInterval(() => {
    console.log(`Remaining time: ${time} seconds`);
    time--;

    if (time < 0) {
      clearInterval(countdown);
      console.log("Countdown Complete!");
      rl.close();
      process.exit();
    }
  }, 1000);
  setTimeout(() => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", (key) => {
      if (key.toString().toLowerCase() === "s") {
        clearInterval(countdown);
        console.log("\nCountdown stopped by user.");
        process.exit();
      }

      if (key.toString() === "\u0003") {
        process.exit();
      }
    });
  }, 1000);
});
