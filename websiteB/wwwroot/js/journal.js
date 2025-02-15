class JournalEntry {
    constructor(title, date, thoughts) {
        this.title = title;
        this.date = date;
        this.thoughts = thoughts;
    }

    createEntryElement() {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("journal-entry"); // Use a new CSS class for styling

        let title = document.createElement("h2");
        title.textContent = this.title;

        let date = document.createElement("p");
        date.classList.add("entry-date");
        date.textContent = `Posted on: ${this.date}`;

        let desc = document.createElement("p");
        desc.classList.add("entry-text");
        desc.textContent = this.thoughts;

        entryDiv.appendChild(title);
        entryDiv.appendChild(date);
        entryDiv.appendChild(desc);

        return entryDiv;
    }

}

// create new entries seperately for easy readibility in the array
const feb_13_25 = new JournalEntry("Sooo I made this site!", "2/13/2025",
    " welp, figured id make this dumb little site to kind of express my feelings towards life and games i've been playing lately. I don't really have any friends I can talk to about this stuff so I just figured this could be my outlit. Plus i get some coding experience in the process. It's kinda fun so far, this is only day one. We will have to see how long it lasts.")



// Array of entries
const entries = [feb_13_25];

// Display entries on the page
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("day-container");

    entries.forEach(entry => {
        container.appendChild(entry.createEntryElement());
    });
});
