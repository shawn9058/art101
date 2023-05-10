//Author: Seokho Kang <skang29@ucsc.edu>
// Date: May/10th/2023

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML = "This test has been changed!";

var new2El = document.createElement("p");
new2El.innerHTML = "This test has been different!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.fontSize = "30px";
new2El.style.color = "blue";