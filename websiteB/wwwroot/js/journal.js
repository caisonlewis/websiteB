class JournalEntry {
    constructor(title, date, thoughts) {
        this.title = title;
        this.date = date;
        this.thoughts = thoughts;
    }

    createEntryElement() {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("journal-entry"); // Use this class for styling

        let card = document.createElement("div");
        card.classList.add("journal-card"); // New class to style each entry as a card

        let title = document.createElement("h2");
        title.textContent = this.title;

        let date = document.createElement("p");
        date.classList.add("entry-date");
        date.textContent = `Posted on: ${this.date}`;

        let desc = document.createElement("p");
        desc.classList.add("entry-text");
        desc.textContent = this.thoughts;

        // Append elements to card container
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(desc);

        // Add the card to the entry div
        entryDiv.appendChild(card);

        return entryDiv;
    }
}

// Create new entries separately for easy readability in the array
const feb_13_25 = new JournalEntry(
    "Sooo I made this site!", "2/13/2025",
    "Welp, figured I'd make this dumb little site to express my feelings about life and games I've been playing lately. I don't really have any friends I can talk to about this stuff, so I figured this could be my outlet. Plus, I get some coding experience in the process. It's kinda fun so far—this is only day one. We will see how long it lasts."
);

const feb_19_25 = new JournalEntry(
    "Site Updates", "2/19/2025",
    "So I've changed quite a few things. First, I added some pages related to old-gen Pokémon teams and my PLA team/shinies. The old-gen page needs updated tables for my actual teams; I've only done Pokémon Blue and LeafGreen so far. The others have placeholder mons in them. I have also added my much-anticipated backlog, importing it from Google Sheets so it should maintain live updates. I want to try to actually play and beat one game at a time. Other than that, I'm currently working on pushing out some CSS changes that allow for everything to stay centered and look nice on any screen size. More to come. Peace! :)"
);

// Array of entries
const entries = [feb_19_25, feb_13_25];

// Display entries on the page
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("day-container");

    entries.forEach(entry => {
        container.appendChild(entry.createEntryElement());
    });
});
