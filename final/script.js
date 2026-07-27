// Rebecca Cathey, July 26th 2026
// Final Project: Vacation Disaster Mad Libs

// Variables

// Tracks how many vacation disaster stories the user creates.
let storyCount = 0;

// Keeps track of the most expensive vacation disaster created.
let highestLoss = 0;

// Uses the Date object to display today's date on the page.
const today = new Date();

document.getElementById("today").textContent =
    today.toLocaleDateString();


// DOM Elements

// Stores references to HTML elements so JavaScript can update the page.
const nameInput = document.getElementById("name");
const friendInput = document.getElementById("friend");
const placeInput = document.getElementById("place");
const animalInput = document.getElementById("animal");
const foodInput = document.getElementById("food");
const verbInput = document.getElementById("verb");
const moneyInput = document.getElementById("number");

const timeSelect = document.getElementById("timeSelect");

const story = document.getElementById("story");
const storyCounter = document.getElementById("storyCount");
const highestLossDisplay = document.getElementById("highestLoss");
const disasterLevel = document.getElementById("disasterLevel");

const greeting = document.getElementById("greeting");
const nameCounter = document.getElementById("nameCount");


// Random Story Openings

// These options help make each generated story unique.
const openings = [
    "Your vacation started perfectly until...",
    "Everything looked peaceful at the beach before...",
    "The waves were calm and the weather was beautiful until...",
    "Everyone thought this would be the best vacation ever until...",
    "The beach trip became unforgettable when..."
];


// Random Story Endings

// These endings give each story a funny conclusion.
const endings = [
    "The locals still tell the story every summer.",
    "You promised never to speak about the trip again.",
    "Your family still laughs about it during holidays.",
    "Somehow the entire event became famous online.",
    "At least you made memories you will never forget."
];


// Greeting Function

// Creates a greeting based on the current time.
function showGreeting() {

    const hour = today.getHours();

    if (hour < 12) {

        greeting.textContent = "Good Morning!";

    } else if (hour < 18) {

        greeting.textContent = "Good Afternoon!";

    } else {

        greeting.textContent = "Good Evening!";

    }
}

showGreeting();


// Generate Story Function

// Combines the user's answers into a personalized vacation disaster story.
function generateStory() {

    const name = nameInput.value.trim();
    const friend = friendInput.value.trim();
    const place = placeInput.value.trim();
    const animal = animalInput.value.trim();
    const food = foodInput.value.trim();
    const verb = verbInput.value.trim();

    const money = parseFloat(moneyInput.value);
    const beachTime = timeSelect.value;


    // Checks that all required information has been entered.
    if (
        name === "" ||
        friend === "" ||
        place === "" ||
        animal === "" ||
        food === "" ||
        verb === "" ||
        isNaN(money)
    ) {

        story.textContent =
            "Please complete every field before generating your story.";

        return;

    }


    // Formats the money amount so it displays like a dollar value.
    const totalLoss = money.toFixed(2);


    // Picks a random opening and ending for each story.
    const opening =
        openings[Math.floor(Math.random() * openings.length)];

    const ending =
        endings[Math.floor(Math.random() * endings.length)];


    // Beach Time Conditional

    // Changes the story description depending on day or night selection.
    let timeDescription;

    if (beachTime === "day") {

        timeDescription =
            "under the bright afternoon sun while tourists filled the beach";

    } else {

        timeDescription =
            "under the glowing moonlight while the waves sparkled in the dark";

    }


    // Character Counting Loop

    // Counts characters entered by the user to help determine disaster level.
    const words = [
        name,
        friend,
        place,
        animal,
        food,
        verb
    ];

    let totalCharacters = 0;

    for (let i = 0; i < words.length; i++) {

        totalCharacters += words[i].length;

    }


    // Disaster Level

    // Uses comparison operators to decide how serious the disaster was.
    let warning = "";

    if (money > 100 && totalCharacters > 25) {

        warning =
            "This was definitely your most expensive vacation.";

        disasterLevel.textContent = "EXTREME";

    } else if (money >= 50) {

        warning =
            "It was expensive, but at least everyone survived.";

        disasterLevel.textContent = "HIGH";

    } else {

        warning =
            "Luckily, the disaster was not too expensive.";

        disasterLevel.textContent = "LOW";

    }


    // Updates the highest vacation loss if a new record is created.
    if (money > highestLoss) {

        highestLoss = money;

        highestLossDisplay.textContent =
            highestLoss.toFixed(2);

    }
      // Story Templates

    // These different formats create variety each time a story is generated.
    const storyTemplates = [

        `${opening} ${name} and ${friend} traveled to ${place} ${timeDescription}. While everyone was ${verb}, a giant ${animal} suddenly charged across the sand and knocked over your delicious ${food}. During the chaos you lost $${totalLoss}. ${warning} ${ending}`,

        `${opening} ${name} and ${friend} thought ${place} would be the perfect vacation spot ${timeDescription}. Everything changed when a wild ${animal} appeared while everyone was ${verb}. Your ${food} disappeared and you lost $${totalLoss}. ${warning} ${ending}`,

        `${opening} While visiting ${place} ${timeDescription}, ${name} and ${friend} were having fun until a ${animal} caused chaos. Everyone was ${verb}, but your ${food} was destroyed and your vacation cost $${totalLoss}. ${warning} ${ending}`,

        `${opening} The trip to ${place} became unforgettable ${timeDescription}. A mysterious ${animal} interrupted everyone who was ${verb} and ruined your ${food}. The disaster left you $${totalLoss} poorer. ${warning} ${ending}`,

        `${opening} ${friend} convinced ${name} to visit ${place} ${timeDescription}. Unfortunately, a huge ${animal} appeared while everyone was ${verb} and knocked away your ${food}. You lost $${totalLoss}. ${warning} ${ending}`

    ];


    // Selects one random completed story from the available templates.
    const completedStory =
        storyTemplates[Math.floor(Math.random() * storyTemplates.length)];


    // Displays the generated story and adds a small animation effect.
    story.textContent = completedStory;

    story.classList.remove("fadeIn");

    void story.offsetWidth;

    story.classList.add("fadeIn");


    // Increases the total number of stories created.
    storyCount++;

    storyCounter.textContent = storyCount;

}


// Reset Function

// Clears the page so the user can create a new vacation disaster.
function resetPage() {

    nameInput.value = "";
    friendInput.value = "";
    placeInput.value = "";
    animalInput.value = "";
    foodInput.value = "";
    verbInput.value = "";
    moneyInput.value = "";

    // Returns the beach theme to the daytime setting.
    timeSelect.value = "day";

    changeBeachTheme();

    story.textContent =
        "Fill out the form, then click Generate Story.";

    story.classList.remove("fadeIn");

    disasterLevel.textContent =
        "Waiting...";

    nameCounter.textContent =
        "0 characters";

    document.title =
        "Vacation Disaster Mad Libs";

}


// Beach Theme Function

// Switches between the day and night beach designs.
function changeBeachTheme() {

    if (timeSelect.value === "night") {

        document.body.classList.add("darkTheme");

    } else {

        document.body.classList.remove("darkTheme");

    }

}


// Event Listeners

// Allows buttons and user input to interact with the webpage.
document
    .getElementById("storyBtn")
    .addEventListener("click", generateStory);


document
    .getElementById("resetBtn")
    .addEventListener("click", resetPage);


// Changes the page theme when the user switches between day and night.
timeSelect.addEventListener("change", function () {

    console.log("Beach time changed:", timeSelect.value);

    changeBeachTheme();

});


// Updates the character counter and browser title while the user types.
nameInput.addEventListener("input", function () {

    nameCounter.textContent =
        nameInput.value.length + " characters";


    if (nameInput.value.length > 0) {

        document.title =
            nameInput.value + "'s Vacation Disaster";

    } else {

        document.title =
            "Vacation Disaster Mad Libs";

    }

});



/*
I started this project by planning out what information I was going to have users fill in and how it would impact the story.
Then I thought about how I needed to have different story options, so it wouldn't just be the same story over and over.
After planning the creative part I began to create variables, functions, and event listeners to control the page, then add
conditionals, loops, random selections, and JavaScript methods like Date, Math.random(), parseFloat(), and toFixed() to make the vacation game interactive.
*/
