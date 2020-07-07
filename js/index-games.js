$(document).ready(function () {
    let container = $("#container");
    $.ajax({
        type: "GET",
        url: "https://fiuba-cares-back.herokuapp.com/api/newsletter/",
        contentType: "application/json; charset=UTF-8;",
        headers: {Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"},
        dataType: "json",
        success: function (data) {
            data.forEach(function (element) {
                container.append(getNewsletterCardHTML(element))
            });
            $("#loading-spinner").hide();
        }
    });

});

function getNewsletterCardHTML(element) {
    let imgSrc = 'https://i.ibb.co/27h2dKB/noimage.png';  // imagen por defecto
    if (element.hasOwnProperty('img_src')) {
        if (isValidHttpUrl(element.img_src)) {
            imgSrc = element.img_src;
        }
    }

    return '<div class="row">\n' +
        '        <div class="col-12 mt-3">\n' +
        '            <div class="card">\n' +
        '                <div class="card-horizontal">\n' +
        '                    <div class="img-square-wrapper">\n' +
        '                        <img class="img-square" src="' + imgSrc + '" alt="Card image cap">\n' +
        '                    </div>\n' +
        '                    <div class="card-body">\n' +
        '                        <h4 class="card-title">' + element.title + '</h4>\n' +
        '                        <p class="card-text">' + getDescription(element) + '</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
}

function getDescription(element, maxLength=300) {
    if (element.hasOwnProperty('description')) {
        if (element.description.length >= maxLength) {
            return element.description.substring(0, maxLength-1) +
                '<span id="dots-'+element._id+'">' +
                '...<a href="#" onclick="event.preventDefault(); viewMore(\''+element._id+'\');">mostrar más</a>' +
                '</span>' +
                '<span id="more-'+element._id+'" style="display: none">'+
                element.description.substring(maxLength-1)+
                '</span>';
        }
        return element.description;
    }
    return '';
}

function viewMore(eventId) {
    $("#dots-"+eventId).hide();
    $("#more-"+eventId).show();
}

function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}