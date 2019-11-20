document.getElementById("menu").addEventListener("click", openMenu);

function openMenu() {
    document.getElementById("dropdown").classList.toggle("active");
}

document.getElementById("modal").addEventListener("click", Modal);

function Modal() {
    document.querySelector(".modal-bg").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", modalClose);
document.querySelector(".close-2").addEventListener("click", modalClose);
document.querySelector(".close-3").addEventListener("click", modalClose);

function modalClose() {
    document.querySelector(".modal-bg").style.display = "none";
    document.querySelector(".modal-bg-2").style.display = "none";
    document.querySelector(".modal-bg-3").style.display = "none";
}

document.getElementById("button").addEventListener("click", modalNext);

function modalNext() {
    document.querySelector(".modal-bg").style.display = "none";
    document.querySelector(".modal-bg-2").style.display = "flex";
}

document.getElementById("button-vorige").addEventListener("click", modalBack);

function modalBack() {
    document.querySelector(".modal-bg").style.display = "flex";
    document.querySelector(".modal-bg-2").style.display = "none";
}

document.getElementById("button-volgende").addEventListener("click", modalNext2);

function modalNext2() {
    document.querySelector(".modal-bg-3").style.display = "flex";
    document.querySelector(".modal-bg-2").style.display = "none";
}

document.getElementById("button-vorige-2").addEventListener("click", modalBack2);

function modalBack2() {
    document.querySelector(".modal-bg-2").style.display = "flex";
    document.querySelector(".modal-bg-3").style.display = "none";
}