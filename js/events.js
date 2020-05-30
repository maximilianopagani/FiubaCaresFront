$(document).ready(function () {
    let container = $("#container");
    $.ajax({
        type: "GET",
        url: "https://fiuba-cares-back.herokuapp.com/api/events/",
        contentType: "application/json; charset=UTF-8;",
        headers: {Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"},
        dataType: "json",
        success: function (data) {
            console.log(data);
            data.forEach(function (element) {
                container.append(getEventCardHTML(element))
            });
            $('.btn-inscription').click(function () {
                $('#inscriptionModal').modal('show');
            });
        }
    });

});

function getEventCardHTML(element) {
    let imgSrc = 'https://i.ibb.co/27h2dKB/noimage.png';  // imagen por defecto
    if (element.hasOwnProperty('img_src')) {
        imgSrc = element.img_src;
    }
    let date = new Date(element.meeting_datetime);
    let dateTimeFormat = new Intl.DateTimeFormat('es-AR').format(date)

    return '<div class="row">\n' +
        '        <div class="col-12 mt-3">\n' +
        '            <div class="card">\n' +
        '                <div class="card-horizontal">\n' +
        '                    <div class="img-square-wrapper">\n' +
        '                        <img class="" src="' + imgSrc + '" alt="Card image cap">\n' +
        '                    </div>\n' +
        '                    <div class="card-body">\n' +
        '                        <h4 class="card-title">' + element.title + '</h4>\n' +
        '                        <p class="card-text">' + element.description + '</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="card-footer">\n' +
        '                    <div class="charla-description" title="Fecha">\n' +
        '                        <img src="https://i.ibb.co/0hzDTsm/icon-calendar.png" alt="fecha">\n' +
        '                        <span>' + dateTimeFormat + '</span>\n' +
        '                    </div>\n' +
        '                    <div class="charla-description" title="Autor">\n' +
        '                        <img src="https://i.ibb.co/4mzwCnt/icon-autor.png" alt="autor">\n' +
        '                        <span>' + element.author + '</span>\n' +
        '                    </div>\n' +
        '                    <div class="charla-description" title="Ubicación">\n' +
        '                        <img src="https://i.ibb.co/J3FGYq6/icon-ubication.png" alt="ubicacion">\n' +
        '                        <span>' + element.meeting_place + '</span>\n' +
        '                    </div>\n' +
        '                    <div style="display: inline">\n' +
        '                        <a href="#" class="btn btn-primary-custom btn-inscription float-right">Inscribirme</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
}