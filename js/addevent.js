var loadImage = function(event) {
  var output = document.getElementById('field_image_preview');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src)
  }
};

$(document).ready(function () {
	$("#form_addevent").submit(function (event) {
		event.preventDefault();
		uploadImage();
	});
});

function uploadImage() {

	let file = document.getElementById('field_image');
	let form = new FormData();
    form.append('image', file.files[0]);

	let settings = {
		url: "https://api.imgbb.com/1/upload?key=b47ea9526f45aa3f371526b664c1511a",
		method: "POST",
		timeout: 0,
		processData: false,
		mimeType: "multipart/form-data",
		contentType: false,
		data: form
	};

	$.ajax(settings)
		.done(function(data) {
			//alert("Imagen cargada con exito.");
			addEvent(JSON.parse(data).data.url);
		})
		.fail(function() {
			//alert("Hubo un error en la carga de la imagen.");
			addEvent('https://i.ibb.co/27h2dKB/noimage.png');
		});
}

function addEvent(img_src) {

	let settings = {
		url: "https://fiuba-cares-back.herokuapp.com/api/events/",
		type: "post",
		contentType: "application/json",
		dataType: "json",
		headers: {
			Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"
		},
		data: JSON.stringify({
			"title": $("#field_title").val(),
			"description": $("#field_desc_textarea").val(),
			"author": $("#field_autor").val(),
			"meeting_datetime": $("#field_date").val() + ' ' + $("#field_time").val(),
			"meeting_place": $("#field_location").val(),
			"quota": $("#field_quota").val(),
			"img_src": img_src
		})
	};

	$.ajax(settings)
		.done(function() {
			$('#successModal').modal('show');
		})
		.fail(function() {
			$('#errorModal').modal('show');
		})
		.always(function() {
			setTimeout("location.href = './adminevents.html';", 2500);
		});
}