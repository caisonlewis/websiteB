document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".pla-image-container");

    // Array of image sources
    const imageSources = [
        "/images/plaImgs/plaFullTeam.jpg",
        "/images/plaImgs/plaSamurott.jpg",
        "/images/plaImgs/plaInfernape.jpg",
        "/images/plaImgs/plaRoserade.jpg",
        "/images/plaImgs/plaRypherior.jpg",
        "/images/plaImgs/plaStaraptor.jpg",
        "/images/plaImgs/plaRotom.jpg"
    ];

    // Loop through image sources and create img elements
    imageSources.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "Team pictures";
        img.classList.add("pla-image"); 
        imageContainer.appendChild(img);
    });
});
