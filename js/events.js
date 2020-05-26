$(document).ready(function () {
    let container = $("#container");
    $.ajax({
        type: "GET",
        //TODO: cambiar para que apunte a la api
        url: "../mocks_api/list-events.json",
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
    return '<div class="row">\n' +
        '        <div class="col-12 mt-3">\n' +
        '            <div class="card">\n' +
        '                <div class="card-horizontal">\n' +
        '                    <div class="img-square-wrapper">\n' +
        '                        <img class="" src="' + element.img + '" alt="Card image cap">\n' +
        '                    </div>\n' +
        '                    <div class="card-body">\n' +
        '                        <h4 class="card-title">' + element.title + '</h4>\n' +
        '                        <p class="card-text">' + element.description + '</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="card-footer">\n' +
        '                    <div class="charla-description" title="Duración">\n' +
        '                        <img src="https://i.ibb.co/6DTsYW5/icon-time.png" alt="duracion">\n' +
        '                        <span>' + element.duration + '</span>\n' +
        '                    </div>\n' +
        '                    <div class="charla-description" title="Autor">\n' +
        '                        <img src="https://i.ibb.co/4mzwCnt/icon-autor.png" alt="autor">\n' +
        '                        <span>' + element.autor + '</span>\n' +
        '                    </div>\n' +
        '                    <div class="charla-description" title="Ubicación">\n' +
        '                        <img src="https://i.ibb.co/J3FGYq6/icon-ubication.png" alt="ubicacion">\n' +
        '                        <span>' + element.ubication + '</span>\n' +
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