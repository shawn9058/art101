// Author:  Seokho Kang
// Date: 06.05.2023

function XKCD () {
    $.ajax({
        url: "https://xkcd.com/info.0.json",
        data:{},
        type: "GET",
        dataType: "json",
        success: function(data){
            $("#output").html("<h3>" + data.title + "</h3>");
            $("#output").append("<img src=" + data.img + ">");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    })
}
$("#activate").click(XKCD);