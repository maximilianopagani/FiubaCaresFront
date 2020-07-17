function getArticleCardHTML(element) {
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

function deleteArticle(btn) {
    const id_article = $(btn).data("id");
    console.log(id_article);
    alert("Se va a borrar el artículo");
    let settings = {
        url: "https://fiuba-cares-back.herokuapp.com/api/articles/" + id_article,
        type: "DELETE",
        contentType: "application/json",
        dataType: "json",
        headers: {
            Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"
        },
        success: function (data){
          console.log("consoooolaaa se borro el articulo");  
        }
    };
 
    $.ajax(settings)
        .done(function() {
            alert("Se borró el artículo correctamente");
        })
        .fail(function() {
            alert("No se borró el artículo");
        })
        .always(function() {
            setTimeout("location.href = './adminarticles.html';", 2500);
        });
}

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
            $('.btn-delete').click(function () {
                deleteArticle($(this));
            });
        }
    });
    $('.btn-addelement').click(function () {
        location.href = './addarticle.html';
    });
});

