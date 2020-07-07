$(document).ready(function () {
    let container = $("#container");
    $.ajax({
        type: "GET",
        url: "https://fiuba-cares-back.herokuapp.com/api/events/",
        contentType: "application/json; charset=UTF-8;",
        headers: {Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"},
        dataType: "json",
        success: function (data) {
            data.forEach(function (element) {
                container.append(getEventCardHTML(element))
            });
            $('.btn-inscription').click(function (event) {
                event.preventDefault();
                showModalInscription($(this));
            });
            $("#loading-spinner").hide();
        }
    });

    $('#form_inscription').submit(function (event) {
        event.preventDefault();
        let btnSubmit = $("#submit-button-inscription");
        btnSubmit.blur();
        btnSubmit.prop("disabled", true);
        $.ajax({
            type: "POST",
            url: "https://fiuba-cares-back.herokuapp.com/api/inscriptions/",
            contentType: "application/json",
            headers: {Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"},
            dataType: "json",
            data: JSON.stringify({
                "email": $("#field_email").val(),
                "dni": $("#field_dni").val(),
                "event_id": $(this).data('event-id')
            }),
            success: function (data) {
                if (data._id) {
                    $("#registration-success-code").text(data._id);
                    $("#registration-success").show();
                } else {
                    showMessageErrorInscription();
                }
            },
            error: function (data) {
                showMessageErrorInscription();
            },
            complete: function (data) {
                $("#registration-summary").hide();
                $("#form_wrapper").hide();
                btnSubmit.hide();
            }
        });
    })

});

function showModalInscription(btn) {
    $("#inscriptionWindow").text('Inscripción: ' + $("#event-title-" + btn.data('id')).text() );
    let date = new Date(btn.data('datetime'));
    $('#registration-summary-date').text(new Intl.DateTimeFormat('es-AR').format(date));
    $('#registration-summary-time').text(date.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }));
    $('#registration-summary-quota').text(btn.data('quota'));
    $('#registration-summary-author').text( $("#event-author-" + btn.data('id')).text() );
    $('#registration-summary-meeting-place').text( $("#event-meeting-place-" + btn.data('id')).text() );

    let form = $('#form_inscription');
    form[0].reset();
    form.data('event-id', btn.data('id'));
    let btnSubmit = $("#submit-button-inscription");
    btnSubmit.prop("disabled", false);
    btnSubmit.show();
    $("#registration-summary").show();
    $("#form_wrapper").show();
    $("#registration-success").hide();
    $("#registration-error").hide();
    $('#inscriptionModal').modal('show');
}

function showMessageErrorInscription() {
    $("#registration-error").show();
}

function getEventCardHTML(element) {
    let imgSrc = 'https://i.ibb.co/27h2dKB/noimage.png';  // imagen por defecto
    if (element.hasOwnProperty('img_src')) {
        if (isValidHttpUrl(element.img_src)) {
            imgSrc = element.img_src;
        }
    }
    let date = new Date(element.meeting_datetime);
    let dateTimeFormat = new Intl.DateTimeFormat('es-AR').format(date);

    return '<div class="row">\n' +
        '        <div class="col-12 mt-3">\n' +
        '            <div class="card">\n' +
        '                <div class="card-horizontal">\n' +
        '                    <div class="img-square-wrapper">\n' +
        '                        <img class="img-square" src="' + imgSrc + '" alt="Card image cap">\n' +
        '                    </div>\n' +
        '                    <div class="card-body">\n' +
        '                        <h4 id="event-title-' + element._id + '" class="card-title">' + element.title + '</h4>\n' +
        '                        <p id="event-description-' + element._id + '" class="card-text">' + getDescription(element) + '</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="card-footer">\n' +
        '                    <div class="charla-description" title="Fecha">\n' +
        '                        <img src="https://i.ibb.co/0hzDTsm/icon-calendar.png" alt="fecha">\n' +
        '                        <span>' + dateTimeFormat + '</span>\n' +
        '                    </div>\n' +
        '                    <div class="charla-description" title="Autor">\n' +
        '                        <img src="https://i.ibb.co/4mzwCnt/icon-autor.png" alt="autor">\n' +
        '                        <span id="event-author-' + element._id + '">' + element.author + '</span>\n' +
        '                    </div>\n' +
        '                    <div class="charla-description" title="Ubicación">\n' +
        '                        <img src="https://i.ibb.co/J3FGYq6/icon-ubication.png" alt="ubicacion">\n' +
        '                        <span id="event-meeting-place-' + element._id + '">' + element.meeting_place + '</span>\n' +
        '                    </div>\n' +
        '                    <div style="display: inline">\n' +
        '                        <a href="#" class="btn btn-primary-custom btn-inscription float-right" data-id="' + element._id + '" data-quota="' + element.quota + '" data-datetime="' + element.meeting_datetime + '">Inscribirme</a>\n' +
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