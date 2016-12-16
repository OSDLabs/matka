var firebase = require('firebase');
var util = require('util');
var expressValidator = require('express-validator');
var credentials = require('../credentials.js');
var fireapp = firebase.initializeApp(credentials.firebaseConfig);

exports.post = function(req, res) {
	// req.checkBody('city', 'Write City correctly').notEmpty().isAlpha();
	// req.checkBody('team_name', 'Write City correctly').notEmpty().isAlpha();
	// req.checkBody('team_captain_name', 'Write City correctly').notEmpty().isAlpha();
	// req.checkBody('team_captain_phone', 'Write City correctly').notEmpty().isInt();
	// req.checkBody('team_captain_email', 'Write City correctly').notEmpty().isEmail();
	// req.checkBody('player_1_name', 'Write City correctly').notEmpty().isAlpha();
	// req.checkBody('player_2_name', 'Write City correctly').notEmpty().isAlpha();
	// req.checkBody('player_3_name', 'Write City correctly').notEmpty().isAlpha();
	// req.checkBody('player_4_name', 'Write City correctly').notEmpty().isAlpha();
	// req.checkBody('alternate_phone', 'Write City correctly').notEmpty().isInt();
	// req.checkBody('participate', 'Write City correctly').notEmpty().isAlpha();
	firebase.database().ref('team/').push({
		city: req.body.city,
		team_name: req.body.team_name,

		team_captain_name: req.body.team_captain_name,
		team_captain_phone: req.body.team_captain_phone,
		team_captain_email: req.body.team_captain_email,

		player_1_name: req.body.player_1_name,
		player_2_name: req.body.player_2_name,
		player_3_name: req.body.player_3_name,
		player_4_name: req.body.player_4_name,

		alternate_phone: req.body.alternate_phone,

		participate: req.body.participate,
	});
	res.redirect(303, '/thankyou');
}

exports.list = function(req, res) {
	Team.find(function(err, teams) {
		res.send(teams);
	})
}