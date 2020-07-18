function getNewsCardHTML(element) {
    return '<div class="row">\n' +
        '        <div class="col-12 mt-3">\n' +
        '            <div class="card">\n' +
        '                <div class="card-horizontal">\n' +
        '                    <div class="card-body">\n' +
        '                       <div class="card-title">\n' + element.title + '\n' +
        '                       <div style="display: inline">\n' +
        '                           <a href="#" class="btn btn-primary-custom btn-delete float-right" data-id="' + element._id + '">Borrar</a>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
}

function deleteEntry(btn) {
    const id_entry = $(btn).data("id");
    console.log(id_entry);
    alert("La noticia seleccionada será borrada");
    let settings = {
        url: "https://fiuba-cares-back.herokuapp.com/api/newsletter/" + id_entry,
        type: "DELETE",
        contentType: "application/json",
        dataType: "json",
        headers: {
            Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"
        }
    };

    $.ajax(settings)
        .done(function() {
            alert("Se borró la noticia correctamente");
        })
        .fail(function() {
            alert("Hubo un error y no se pudo borrar la noticia. Intente mas tarde.");
        })
        .always(function() {
            setTimeout("location.href = './adminnews.html';", 2500);
        });
}

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
                container.append(getNewsCardHTML(element))
            });
            $('.btn-delete').click(function () {
                deleteEntry($(this));
            });
        }
    });
    $('.btn-addelement').click(function () {
        location.href = './addnews.html';
    });
});
