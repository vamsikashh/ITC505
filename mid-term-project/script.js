const story = {
    start: {
        text: "You are at a crossroads. Do you want to go to the forest or the beach?",
        choices: [
            { text: "Forest", next: "forest" },
            { text: "Beach", next: "beach" }
        ],
        image: "forest and beach.png"
    },
    forest: {
        text: "You enter the forest and see a wolf and a treasure chest. What do you do?",
        choices: [
            { text: "Approach the wolf", next: "wolf" },
            { text: "Open the treasure chest", next: "treasure" }
        ],
        image: "wolf tresure.png"
    },
    beach: {
        text: "You arrive at the beach and see a stranger and a hidden cave. What do you do?",
        choices: [
            { text: "Talk to the stranger", next: "stranger" },
            { text: "Explore the hidden cave", next: "cave" }
        ],
        image: "stranger.png"
    },
    wolf: {
        text: "The wolf looks aggressive. Do you run away or fight?",
        choices: [
            { text: "Run away", next: "runAway" },
            { text: "Fight", next: "fight" }
        ],
        image: "aggressive.png"
    },
    treasure: {
        text: "You found a treasure chest full of gold. You are now rich and happy.",
        choices: [],
        image: "tresure.png"
    },
    stranger: {
        text: "The stranger seems friendly. Do you make a friend or do you get robbed?",
        choices: [
            { text: "Make a friend", next: "friend" },
            { text: "Get robbed", next: "robbed" }
        ],
        image: "strangers.png"
    },
    cave: {
        text: "You find a hidden cave. Do you discover a secret or get trapped?",
        choices: [
            { text: "Discover a secret", next: "secret" },
            { text: "Get trapped", next: "trapped" }
        ],
        image: "caves.png"
    },
    runAway: {
        text: "You ran away safely but are disappointed.",
        choices: [],
        image: "runaway.png"
    },
    fight: {
        text: "You fought the wolf and got injured but emerged victorious.",
        choices: [],
        image: "fight.jpeg"
    },
    friend: {
        text: "You made a new friend and are happy and peaceful.",
        choices: [],
        image: "friends.png"
    },
    robbed: {
        text: "You got robbed and are sad and lost.",
        choices: [],
        image: "robbed.png"
    },
    secret: {
        text: "You discovered a secret and are excited and enlightened.",
        choices: [],
        image: "secret.png"
    },
    trapped: {
        text: "You got trapped but were rescued later. You are scared but safe.",
        choices: [],
        image: "trapped.png"
    }
};

function startGame() {
    currentStage = 'start';
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById('story').innerText = stage.text;
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => {
            currentStage = choice.next;
            updatePage();
        });
        choicesDiv.appendChild(button);
    });
    document.getElementById('image').innerHTML = `<img src="${stage.image}" alt="${currentStage}">`;
    if (stage.choices.length === 0) {
        document.getElementById('restart').style.display = 'block';
    } else {
        document.getElementById('restart').style.display = 'none';
    }
}

let currentStage = 'start';
document.getElementById('restart').addEventListener('click', startGame);
startGame();