function getURLParam(param){
  return new URLSearchParams(window.location.search).get(param);
}

var loadImage = function(event) {
	var preview = document.getElementById('field_image_preview');
	preview.src = URL.createObjectURL(event.target.files[0]);
};

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

	return $.ajax(settings)
		.done(function(data) {
			$("#field_image_preview").attr("src", JSON.parse(data).data.url);
			modEvent();
		})
		.fail(function() {
			$("#field_image_preview").attr("src", "https://i.ibb.co/27h2dKB/noimage.png");
			modEvent();
		});
}

$(document).ready(function () {

	let settings = {
		url: "https://fiuba-cares-back.herokuapp.com/api/events/" + getURLParam("event_id"),
		type: "get",
		contentType: "application/json; charset=UTF-8;",
		headers: {
			Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"
		},
		dataType: "json"
	};

	$.ajax(settings)
		.done(function(data) {
			let date = new Date(data.meeting_datetime);
			$("#field_title").val(data.title);
			$("#field_desc_textarea").val(data.description);
			$("#field_author").val(data.author);
			$("#field_date").val(new Intl.DateTimeFormat('es-AR').format(date));
			$("#field_time").val(date.toLocaleTimeString('es-AR'));
			$("#field_location").val(data.meeting_place);
			$("#field_quota").val(data.quota);
			$("#field_image_preview").attr("src", data.img_src);
		})
		.fail(function() {
			$('#errorModal').modal('show');
			setTimeout("location.href = './adminevents.html';", 2500);
		});

	$("#form_modevent").submit(function (event) {

		event.preventDefault();

		if ($("#field_image").get(0).files.length === 0) {
			modEvent();
		} else {
			uploadImage();
		}
	});
});

function modEvent() {
	let settings = {
		url: "https://fiuba-cares-back.herokuapp.com/api/events/" + getURLParam("event_id"),
		type: "put",
		contentType: "application/json; charset=UTF-8;",
		dataType: "json",
		headers: {
			Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"
		},
		data: JSON.stringify({
			"title": $("#field_title").val(),
			"description": $("#field_desc_textarea").val(),
			"author": $("#field_author").val(),
			"meeting_datetime": $("#field_date").val() + ' ' + $("#field_time").val(),
			"meeting_place": $("#field_location").val(),
			"quota": $("#field_quota").val(),
			"img_src": $("#field_image_preview").attr("src")
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
			//setTimeout("location.href = './adminevents.html';", 2500);
		});
}