var loadImage = function(event) {
  var image = document.getElementById('field_image_preview');
  image.style.maxHeight = "400px";
  image.style.maxWidth = "100%";
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function() {
    URL.revokeObjectURL(image.src)
  }

  document.getElementById('field_image_frame').style.width = "auto";
  document.getElementById('field_image_frame').style.borderStyle = "none"; 
};

$(document).ready(function () {
	$("#form_addarticle").submit(function (event) {
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
			addArticle(JSON.parse(data).data.url);
		})
		.fail(function() {
			addArticle('https://i.ibb.co/27h2dKB/noimage.png');
		});
}

function addArticle(img_src) {

	let settings = {
		url: "https://fiuba-cares-back.herokuapp.com/api/articles/",
		type: "post",
		contentType: "application/json",
		dataType: "json",
		headers: {
			Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"
		},
		data: JSON.stringify({
			"title": $("#field_title").val(),
			"preview": $("#field_copete_textarea").val(),
			"img_src": img_src,			
			"description": $("#field_body_textarea").val(),
			"source": $("#field_source").val()
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
			setTimeout("location.href = './adminarticles.html';", 2500);
		});
}