// Author:  Seokho Kang
// Date: 05.21.2023

function sortingHat(name)  {
    nameVal = name.length % 4;

    if (nameVal == 0)   {
        return "Gryfrindor"
    }
    else if (nameVal == 1) {
        return "Ravenclaw"
    }
    else if (nameVal == 2) {
        return "Slytherin"
    }
    else if (nameVal == 3) {
        return "Hufflepuff"
    }
}

// get name from the input
var Button = document.getElementById("my-button");
Button.addEventListener("click", function() {
    var name = document.getElementById("my-name").value;
    document.getElementById("output").innerHTML = "<p>The sorting hat has sorted you into:" + sortingHat(name) + "</p>";
});