class Game {
    constructor(title, platform, image, thoughts) {
        this.title = title;
        this.platform = platform;
        this.image = image;
        this.thoughts = thoughts;
    }
    // Platform name to CSS class mapping
    static platformClasses = {
        "Nintendo Switch": "switch",
        "PlayStation 5": "playstation",
        "Xbox One": "xbox",
        "PC": "pc",
        "Other": "other"
    };

    createGameElement() {
        // Create a div to hold the game card
        let gameDiv = document.createElement("div");
        gameDiv.classList.add("game-card"); // Add a CSS class for styling

        // Create an image element for the game
        let img = document.createElement("img");
        img.src = this.image;  // Set the image source
        img.alt = this.title;  // Set alternative text for accessibility

        // Create a heading element for the game title
        let title = document.createElement("h2");
        title.textContent = this.title; // Set the text inside the h2 element

        //create subheading element for the game platform
        let subheading = document.createElement("h3");
        subheading.textContent = this.platform; //set heading inside h3 element

        // Assign a mapped class if it exists, otherwise default to "other"
        let platformClass = Game.platformClasses[this.platform] || "other";
        subheading.classList.add(platformClass);

        // Create a paragraph element for the game description
        let desc = document.createElement("p");
        desc.textContent = this.thoughts; // Set the text inside the paragraph

        // Append all elements (image, title, and description) to the game card div
        gameDiv.appendChild(img);
        gameDiv.appendChild(title);
        gameDiv.appendChild(subheading);
        gameDiv.appendChild(desc);

        // Return the complete game card element so it can be added to the page
        return gameDiv;
        }
}

// create new games seperately for easy readibility in the array
const xc3 = new Game("Xenoblade Chronicles 3", "Nintendo Switch", "images/xc3.jpg",
    "This game is absolutely polarizing. The story is beautiful, you cant help but fall in love with the characters, it took me a while to finish because I was coming back to the game on and off for a good year or so but my god.. I wouldn't have had it any other way. I truly felt the weight and growth of the story taking it slow. A must own for any RPG fan. "
);

const gris = new Game("Gris", "PlayStation 5", "images/grisArt.jpg",
    "Very fun and beautiful little game, only takes about 5-6 hours to complete, it is like controlling a character in a painting, stunning visuals, beautiful sound and music, the puzzles are fun. The story is deeply artistic and emotionally heavy handed. I really liked this game, especially playing it on PS5 with the enhanced controller vibration and dualsense triggers (or whatever they're called). The ps5 controller alone makes the game even more immersive and mesmerizing. Just play it. Definitely worth 5-6 hours of your time."
)


// Array of games
const games = [xc3, gris];

// Display games on the page
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("game-container");

    games.forEach(game => {
        container.appendChild(game.createGameElement());
    });
});
