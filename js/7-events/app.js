// function changeTitle() {
//     document.querySelectorAll(".card-title")[1].textContent = "sildim";
// }

const clearButton = document.querySelector("#todoClearButton");

tetik = true;
clearButton.addEventListener("mouseover", func);
function func(e) {
    if (tetik) {
        document.querySelector("#todoClearButton").innerText = "Sildim";
        tetik = !tetik;
    } else {
        document.querySelector("#todoClearButton").innerText = "Basa Geldi";
        tetik = !tetik;
    }
    console.log(tetik);

    console.log(e.target.textContent);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
}
