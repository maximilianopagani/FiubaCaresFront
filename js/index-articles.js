$(document).ready(function () {
    let container = $("#container");
    $.ajax({
        type: "GET",
        url: "https://fiuba-cares-back.herokuapp.com/api/articles/",
        contentType: "application/json; charset=UTF-8;",
        headers: {Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"},
        dataType: "json",
        success: function (data) {
            data.forEach(function (element) {
                container.append(getArticleCardHTML(element))
            });
        }
    });

});

function getArticleCardHTML(element) {
    let imgSrc = 'https://i.ibb.co/27h2dKB/noimage.png';  // imagen por defecto
    if (element.hasOwnProperty('img_src')) {
        imgSrc = element.img_src;
    }

    return '<div class="row">\n' +
        '        <div class="col-12 mt-3">\n' +
        '            <div class="card">\n' +
        '                <div class="card-horizontal">\n' +
        '                    <div class="img-square-wrapper">\n' +
        '                        <img class="" src="' + imgSrc + '" alt="Card image cap">\n' +
        '                    </div>\n' +
        '                    <div class="card-body">\n' +
        '                        <h4 class="card-title">' + element.title + '</h4>\n' +
        '                        <p class="card-text">' + getPreview(element) + '</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="card-footer">\n' +
        '                    <div style="display: inline">\n' +
        '                        <a href="viewarticle.html?article_id=' + element._id + '" class="btn btn-primary-custom float-right">Leer más</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
}

function getPreview(element, maxLength=300) {
    if (element.hasOwnProperty('preview')) {
        if (element.preview.length >= maxLength) {
            return element.preview.substring(0, maxLength-1) + '...';
        }
        return element.preview;
    }
    return '';
}