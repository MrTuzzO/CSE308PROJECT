const popupBox = document.getElementById("popupBox");
const resultDiv = document.getElementById("result");
const allFunctions = document.getElementById("functions");

function showPopup() {
    popupBox.style.display = "block";
    allFunctions.style.visibility = "hidden";

}

function closePopup() {
    allFunctions.style.visibility = "visible";
    popupBox.style.display = "none";
    resultDiv.innerHTML = "";
}