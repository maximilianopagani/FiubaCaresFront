var loadFile = function(event) {
  var output = document.getElementById('field_image_preview');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src)
  }
};

function addevent() {
    alert("POST A API BACK");
    
}