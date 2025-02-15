class AboutMeEntry {
    constructor(aboutme) {
        this.aboutme = aboutme;
    }

    createEntryElement() {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("aboutme-entry"); // Use a new CSS class for styling

        let desc = document.createElement("p");
        desc.classList.add("entry-text");
        desc.textContent = this.aboutme;

       
        entryDiv.appendChild(desc);

        return entryDiv;
    }

}
document.addEventListener("DOMContentLoaded", function () {
    let img = document.createElement("img");
    img.src = "/images/imgofme.png";
    img.alt = "A picture of me";

    // Add CSS class for styling
    img.classList.add("profile-image");

    // Append image to container
    document.querySelector(".image-container").appendChild(img);

    const container = document.getElementById("aboutme-container");

    // Create an AboutMeEntry object properly
    const entry = new AboutMeEntry("Hi, I'm Blizz. I like playing video games and programming! This site is basically a dump bin for whatever I feel like sharing! Stick around for a while and see what kind of weird stuff I'm into!");

    // Append the created element to the container
    container.appendChild(entry.createEntryElement());
});