class JournalEntry {
    constructor(title, date, thoughts) {
        this.title = title;
        this.date = date;
        this.thoughts = thoughts;
    }

    createEntryElement() {
        // Create a div to hold the journal entry card
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("game-card"); // Add a CSS class for styling

        // Create a heading element for the journal entry title
        let title = document.createElement("h2");
        title.textContent = this.title; // Set the text inside the h2 element

        //create date subheading
        let date = document.createElement("h3");
        date.textContent = this.date; //set heading inside h3 element

      

        // Create a paragraph element for the journal entry itself
        let desc = document.createElement("p");
        desc.textContent = this.thoughts; // Set the text inside the paragraph

        // Append all elements (title, date, and description) to the entry card div
        entryDiv.appendChild(title);
        entryDiv.appendChild(date);
        entryDiv.appendChild(desc);

        // Return the complete entry card element so it can be added to the page
        return entryDiv;
    }
}

// create new entries seperately for easy readibility in the array
const feb_13_25 = new JournalEntry("Sooo I made this site!", "2/13/2025",
    " welp, figured id make this dumb little site to kind of express my feelings towards life and games i've been playing lately. I don't really have any friends I can talk to about this stuff so I just figured this could be my outlit. Plus i get some coding experience in the process. It's kinda fun so far, this is only day one. We will have to see how long it lasts. I guess if I had to say anything today it would be that I am tired of working a dead end job making hardly any money and I miss being young and having fun. The older I get, the harder it becomes to find joy.")



// Array of entries
const entries = [feb_13_25];

// Display entries on the page
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("day-container");

    entries.forEach(entry => {
        container.appendChild(entry.createEntryElement());
    });
});
