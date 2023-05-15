// Author:  Seokho Kang
// Date: 05.15.2023

var button = document.getElementById("my-button");

//get name fromt the input
button.addEventListener('click', function() {
    inputValue = document.getElementById("user-name").value;
    nameSort(inputValue);
});

//Sorts a name
function nameSort(name) {
    //splits string, sorts it, then joins it back together
    var nameSorted = name.split("").sort().join("");
    var newDiv = document.getElementById("output");
    newDiv.innerHTML = nameSorted;
}