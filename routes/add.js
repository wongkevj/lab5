var data = require("../data.json");

exports.addFriend = function(req, res) {   
	var friend = {"name": req.query.name, "description": req.query.description, "imageURL": "http://lorempixel.com/400/400/people"};
	data["friends"].push(friend);
	res.render('index', data);
	// Your code goes here
}
