//Rebecca Cathey, July 19th 2026
//Mood Changer Project

// STEP 1: Select elements
const moodTitle = document.querySelector("#moodTitle");
const quote = document.querySelector("#quote");

const buttons = document.querySelector("#buttons");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");

// STEP 2: Create the moods object
const moods = {
    happy: {
        name: "Happy",
        bg: "#FFD700",
        text: "#bd26b0",
        message: "Warm smiles and the sun's kisses!"
    },
    calm: {
        name: "Calm",
        bg: "#A8DADC",
        text: "#1D3557",
        message: "Take a deep breath and enjoy the peaceful moment."
    },
    angry: {
        name: "Angry",
        bg: "#C1121F",
        text: "#FFFFFF",
        message: "Take a moment to cool down and breathe."
    },

    sleepy: {
        name: "Sleepy",
        bg: "#4B4E6D",
        text: "#F8F9FA",
        message: "Time to relax and get some well-deserved rest."
    }
};

// STEP 3: Change the mood
function changeMood(moodName) {
    const mood = moods[moodName];
    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    quote.textContent = mood.message;
    moodTitle.textContent = mood.name;
    console.log("Mood selected:", moodName);
    console.log("Mood settings:", mood);
}

// STEP 4: Event handlers
function handleHappyClick() {
    changeMood("happy");
}
function handleCalmClick() {
    changeMood("calm");
}
function handleAngryClick() {
    changeMood("angry");
}
function handleSleepyClick() {
    changeMood("sleepy");
}

// STEP 5: Event listeners
happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);
