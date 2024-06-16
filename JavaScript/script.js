function expandDiv() {
    document.querySelector(".elastic-div").classList.add("expanded");
    document.querySelector(".elastic-div").classList.remove("shrunk");
}

function shrinkDiv() {
    document.querySelector(".elastic-div").classList.add("shrunk");
    document.querySelector(".elastic-div").classList.remove("expanded");
}