//In case the need arises to shift to mongodb from firebase
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
	city: String,
	team_name: String,

	team_captain_name: String,
	team_captain_phone: Number,
	team_captain_email: String,

	player_1_name: String,
	player_2_name: String,
	player_3_name: String,
	player_4_name: String,

	alternate_phone: Number,

	participate: String,
});

module.exports = mongoose.model('Team', teamSchema);