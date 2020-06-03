$(document).ready(function () {
	$("#form_login").submit(function (event) {
		event.preventDefault();
		$("#error-login").hide();
		$.ajax({
			type: "GET",
			url: "https://fiuba-cares-back.herokuapp.com/api/user/"+$("#field_user").val()+"/"+$("#field_password").val(),
			contentType: "application/json; charset=UTF-8;",
			headers: {Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.oF_jJKavmWrM6d_io5M5PBiK9AKMf_OcK4xpc17kvwI"},
			dataType: "json",
			success: function (data) {
				if (data.length) {
					if (data[0].name === $("#field_user").val() && data[0].password === $("#field_password").val()) {
						window.location.replace("../events/adminevents.html");
						return;
					}
				}
				$("#error-login").show();
			},
			error: function (data) {
				$("#error-login").show();
			}
		});
	});

});

