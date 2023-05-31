// Author:  Seokho Kang
// Date: 05.31.2023

function yesNo () {
    $.ajax({
    url: "https://yesno.wtf//api",
    type: "GET",
    data: {},
    dataType: "json" 
})
.done(function (data) {

    $("#output").html("<h2>" + data.answer+ "</h2>");
    $("#output").append("<img src=" + data.image + ">");
})
}
$("#activate").click(yesNo); 