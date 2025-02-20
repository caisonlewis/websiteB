document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".pla-image-container");

    // Array of image sources
    const imageSources = [
        "/BlizzNet/websiteB/wwwroot//images/plaImgs/plaFullTeam.jpg",
        "/BlizzNet/websiteB/wwwroot//images/plaImgs/plaSamurott.jpg",
        "/BlizzNet/websiteB/wwwroot//images/plaImgs/plaInfernape.jpg",
        "/BlizzNet/websiteB/wwwroot//images/plaImgs/plaRoserade.jpg",
        "/BlizzNet/websiteB/wwwroot//images/plaImgs/plaRypherior.jpg",
        "/BlizzNet/websiteB/wwwroot//images/plaImgs/plaStaraptor.jpg",
        "/BlizzNet/websiteB/wwwroot//images/plaImgs/plaRotom.jpg"
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
