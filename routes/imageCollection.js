var mongoose = require('mongoose');

//define a schema for mongoose, assume incoming data is a string
var imageSchema = mongoose.Schema({
  image: String
})

//define a new model
var ImageMod = mongoose.model('Image', imageSchema);

//create a function that will send image to database
module.exports.send = function(req, res) {

  //create a new instance of mongoose model
	var image = new ImageMod({image: Object.keys(req.body).join()});

  //send mongoose model to mongo
	image.save(function(err, results) {
		if(err) {
			console.log('Error sending message to database', err)
		}
		else {
			console.log('reslts', results)
			res.send(results)
		}
	})
}