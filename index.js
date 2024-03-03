var icon_share = document.querySelector(".share")
var icons = document.querySelector(".icones")


icon_share.addEventListener("click", (evento) => {
    icons.classList.toggle("aparece")
})

var icon_desaparece = document.querySelector("#sobreposto")
icon_desaparece.addEventListener("click", (desaparece) => {
    icons.classList.add("aparece")
})