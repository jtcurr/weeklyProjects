//create a submission function to take in image from the client
function submitFunc() {
	//get the document from the html living at id of 'file'
  var file = document.getElementById('file').files[0];
  var fileReader = new FileReader();
  
  //get the file from the client as text...or url?
  fileReader.onload = function(e) {
  	var tinyImage = e.target.result;
    //send the converted image file to mongo with ajax
  	$.ajax({
  		type: 'POST',
  		url: '/image',
  		dataType: 'jsonp',
  		data: JSON.stringify(tinyImage),
  		success: function(data) {
  			console.log('Success adding data to db')
  		},
  		error: function(error) {
  			console.log(error,'error sending to db')
  		}
  	})
  }
  fileReader.onerror = function(event) {
  	console.log('Error', event)
  }
  //toggle from readAsDataURL or readAsText to change output
  fileReader.readAsDataURL(file);
}

