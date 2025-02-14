// Define the Game class
class Game {
    constructor(title, image, description) {
        this.title = title;
        this.image = image;
        this.description = description;
    }

    createGameElement() {
        let gameDiv = document.createElement("div");
        gameDiv.classList.add("game-card");

        let img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title;

        let title = document.createElement("h2");
        title.textContent = this.title;

        let desc = document.createElement("p");
        desc.textContent = this.description;

        gameDiv.appendChild(img);
        gameDiv.appendChild(title);
        gameDiv.appendChild(desc);

        return gameDiv;
    }
}

// Array of games
const games = [
    new Game("Cyberpunk 2077", "images/cyberpunk.jpg", "A futuristic RPG with deep storytelling."),
    new Game("Deus Ex: Human Revolution", "images/deusex.jpg", "Cyberpunk meets stealth-action."),
    new Game("Ghostrunner", "images/ghostrunner.jpg", "Fast-paced parkour and sword combat."),
];

// Display games on the page
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("game-container");

    games.forEach(game => {
        container.appendChild(game.createGameElement());
    });
});
