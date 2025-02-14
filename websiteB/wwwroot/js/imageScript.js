document.addEventListener("DOMContentLoaded", function () {
    let img = document.createElement("img");
    img.src = "/images/imgofme.png";
    img.alt = "A picture of me";

    // Add CSS class for styling
    img.classList.add("profile-image");

    // Append image to container
    document.querySelector(".image-container").appendChild(img);
});
