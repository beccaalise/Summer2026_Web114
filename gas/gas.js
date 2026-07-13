// Rebecca Cathey, July 12th 2026

// Global Variables
let entryCount = 0;
let totalGas = 0;

// Ask the user their name using a prompt
let username = promt("Enter your name");

// Use an if statement that will validate the name
if (username === null) {
  alert("You cancelled the name prompt";
}
else if (username.trim() === "") {
  alert ("You must type a name")
}

//Use an else that use a variable average and check cancelled entry
else{
  let average = calcGasAvg():
  if (average === null) {
    alert("You cancelled entering gas totals.")
  }
}

// Show gas totals or averages
else {
  if (entryCount === 0) {
    alert("Mo gas totals were entered.");
  }
  else if (entryCount === 1) {
    alert(username + "'s total gas is $" + totalGaas.toFixed(2));
  }
  else {
    alert(username + "'s average weekly gas bill is $" + average.toFixed(2));
  }

  let entryMessage = "";
  if (entryCount === 0) {
    entryMessage = "No gas totals were entered.";
  }
  else if (entryCount === 1) {
    entryMessage = "You entered 1 gas total.";
  }
  else {
    entryMessage = "You entered " + entryCount + "gas totals.";
  }

  alert (entryMessage);
}

//Calculate the average gas bill
Function calcGasAvg () {
  let input;
}
