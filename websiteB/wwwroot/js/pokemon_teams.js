class Pokemon {
    constructor(sprite, name, nickname, level, moves) {
        this.sprite = sprite;
        this.name = name;
        this.nickname = nickname;
        this.level = level;
        this.moves = moves;
    }

    createRowElement() {
        let row = document.createElement("tr");

        // Pokémon Sprite
        let spriteCell = document.createElement("td");
        let img = document.createElement("img");
        img.src = this.sprite;
        img.alt = this.name;
        spriteCell.appendChild(img);
        row.appendChild(spriteCell);

        // Name
        let nameCell = document.createElement("td");
        nameCell.textContent = this.name;
        row.appendChild(nameCell);

        // Nickname
        let nicknameCell = document.createElement("td");
        nicknameCell.textContent = this.nickname;
        row.appendChild(nicknameCell);

        // Level
        let levelCell = document.createElement("td");
        levelCell.textContent = this.level;
        row.appendChild(levelCell);

        // Moveset (Bulleted List)
        let movesCell = document.createElement("td");
        let moveList = document.createElement("ul");
        this.moves.forEach(move => {
            let li = document.createElement("li");
            li.textContent = move;
            moveList.appendChild(li);
        });
        movesCell.appendChild(moveList);
        row.appendChild(movesCell);

        return row;
    }
}

// Sample Pokémon Teams
const leafgreenTeam = [
    new Pokemon("/images/sprites/charizard.png", "Charizard", "Blaze", 60, ["Flamethrower", "Fly", "Dragon Claw", "Earthquake"]),
    new Pokemon("/images/sprites/snorlax.png", "Snorlax", "Tank", 55, ["Body Slam", "Rest", "Snore", "Shadow Ball"])
];

const emeraldTeam = [
    new Pokemon("/images/sprites/swampert.png", "Swampert", "Mudstorm", 62, ["Surf", "Earthquake", "Ice Beam", "Protect"])
];

const platinumTeam = [
    new Pokemon("/images/sprites/torterra.png", "Torterra", "Gaia", 60, ["Earthquake", "Wood Hammer", "Stone Edge", "Synthesis"]),
    new Pokemon("/images/sprites/infernape.png", "Infernape", "Blaze", 55, ["Flamethrower", "Close Combat", "Grass Knot", "ThunderPunch"])
];

// Populate Tables
document.addEventListener("DOMContentLoaded", () => {
    const leafgreenTable = document.getElementById("leafgreen-team");
    leafgreenTeam.forEach(pokemon => {
        const row = pokemon.createRowElement();
        leafgreenTable.appendChild(row);
    });

    const emeraldTable = document.getElementById("emerald-team");
    emeraldTeam.forEach(pokemon => {
        const row = pokemon.createRowElement();
        emeraldTable.appendChild(row);
    });

    const platinumTable = document.getElementById("platinum-team");
    platinumTeam.forEach(pokemon => platinumTable.appendChild(pokemon.createRowElement()));
});

