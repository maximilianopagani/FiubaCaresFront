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
            $('.btn-delete').click(function () {
                alert("se va a borrar el elemento");
            });
            $('.btn-modify').click(function () {
                location.href = "./modevent.html?event_id=" + $(this).data('id');
            });

        }
    });
    $('.btn-addelement').click(function () {
        location.href = './addevent.html';
    });
});

function getEventCardHTML(element) {
    return '<div class="row">\n' +
        '        <div class="col-12 mt-3">\n' +
        '            <div class="card">\n' +
        '                <div class="card-horizontal">\n' +
        '                    <div class="card-body">\n' +
        '                       <div class="card-title">\n' + element.title + '\n' +
        '                       <div style="display: inline">\n' +
        '                        <a href="#" class="btn btn-primary-custom btn-delete float-right" data-id="' + element._id + '">Borrar</a>\n' +
        '                        <a href="#" class="btn btn-primary-custom btn-modify float-right" data-id="' + element._id + '">Modificar</a>\n' +        
        '                    </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
}