// Rebecca Cathey, July 12th 2026

// Global Variables
let entryCount = 0;
let totalGas = 0;

// Ask the user their name using a prompt
let username = prompt("Enter your name");

// Use an if statement that will validate the name
if (username === null) {
  alert("You cancelled the name prompt.");
}
else if (username.trim() === "") {
  alert ("You must type a name.");
}

//Use an else that use a variable average and check cancelled entry
else {
  let average = calcGasAvg();
  if (average === null) {
    alert("You cancelled entering gas totals.")
  }
// Show gas totals or averages
  else {
    if (entryCount === 0) {
      alert("No gas totals were entered.");
    }
    else if (entryCount === 1) {
      alert(username + "'s gas total is $" + totalGas.toFixed(2));
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
      entryMessage = "You entered " + entryCount + " gas totals.";
    }
  
    alert (entryMessage);
  }
}

//Calculate the average gas bill
function calcGasAvg() {
  let input;
  input = prompt("Enter your first week's gas total. Enter -1 when you are done.");

  if (input === null) {
    return null;
  }

  let weeklyGas = parseFloat(input);

  while (weeklyGas !== -1) {
    
    if(isNaN(weeklyGas)) {
      alert("Please enter a valid number.");
      input = prompt("Enter the gas total again. Enter -1 when you are done.");
      if (input === null) {
        return null;
      }
      weeklyGas = parseFloat(input);
      continue;
    }

    totalGas += weeklyGas;
    entryCount ++;
    input = prompt("Enter your next week's gas total. Enter -1 when you are done.");

    if (input === null) {
      return null;
    }

    weeklyGas = parseFloat(input);
  }

  if (entryCount > 0) {
    return totalGas / entryCount;
  }
  return 0;
}
