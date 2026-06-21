//Rebecca Cathey, June 21st 2026
//Adventure Character Creator

//Step 4: Welcome Message
alert(`Welcome to the Adventure Character Creator!
My name is Rebecca, and today we'll create a legendary hero who lives in a magical Underwater Kingdom. 
Our kingdom is full of coral castles, hidden treasures, and mysterious sea creatures that need protecting.`);

//Step 5: Character Name
const charName =
  prompt(`What is your character's name?`,
         "Wanderer"
         );

//Step 6: Pet / Companion
const pet = 
  prompt(
  `Every hero needs a companion! What sea creature travels with ${charName}?`,
  "Sea Dragon"
  );

//Step 7: Superpowers
const superpower = 
  prompt(
  `What special underwater power does ${charName} possess?`,
  "Controlling Ocean Currents"
  );

//Step 8: Years of Training
const trainingYearsText = 
prompt(
  `How many years has ${charName} been training?`,
  "5"
  );

//Covert string to number
const trainingYears = Number(trainingYearsText);

//Log both values and types
console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

//Calculate power level
const powerLevel = trainingYears * 10;

//Step 9: Likes Fighting Monsters
const likesFighting = confirm(
  `Does ${charName} like fighting monsters?

  Click OK for Yes
  Click Cancel for NO`
  );

//Log value and type
console.log(likesFighting, typeof likesFighting);

//Step 10: Loading Message
alert(`Gathering magic for ${charName}... almost ready!`)

//Step 11: Final Character Story
