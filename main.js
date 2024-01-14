
const [current, imgs] = [document.querySelector("#current"), document.querySelectorAll(".imgs img")];
const opacity = 0.4;

//imgs.forEach(img => img.addEventListener("click", (e) => current.src = e.target.src)); - one way to do it

//Set first image opacity
imgs[0].style.opacity = opacity;

// Change current img to source of clicked image
imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
    //Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change current img to source of clicked image
    current.src = e.target.src;

    //Add fade-in class
    current.classList.add("fade-in");

    //Remove fade-in class after 0.5 seconds
    setTimeout(() => current.classList.remove("fade-in"), 500);

    // Change opacity to opacity var
    e.target.style.opacity = opacity;
}
