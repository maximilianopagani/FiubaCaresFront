function getURLParam(param){
    return new URLSearchParams(window.location.search).get(param);
}

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://fiuba-cares-back.herokuapp.com/api/articles/" + getURLParam("article_id"),
        contentType: "application/json; charset=UTF-8;",
        headers: {Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"},
        dataType: "json",
        success: function (data) {
            document.title = 'FIUBA Cares - ' + data.title;
            $("#title").text(data.title);
            $("#preview").text(data.preview);

            buildDescription(data.description, $("#div-description"));


            if (data.hasOwnProperty('img_src')) {
                let imgArticle = $("#img-article");
                imgArticle.attr('src', data.img_src);
                imgArticle.show();
            }

            let date = new Date(data.created);
            let dateTimeFormat = new Intl.DateTimeFormat('es-AR').format(date);
            $("#date").text(dateTimeFormat);
            $("#source-article").text(data.source);
            $("hr").show();
            $("#loading-spinner").hide();
        }
    });
});

function buildDescription(descriptionString, htmlDivElement) {
    descriptionString.split(/\r?\n/).forEach(function (desc) {
        if (desc.length > 0) {
            htmlDivElement.append("<p>" + desc + "</p>");
        }
    })
}