//In case the need arises to be shifted to PostgreSQL from firebase
const pg = require('pg');
var postgre = require('../credentials.js');

const client = new pg.Client(postgre.url);

client.connect(function(err) {
	if (err) console.log(err);
	client.query(
	'CREATE TABLE quark(id SERIAL PRIMARY KEY, city VARCHAR(20) not null, team_name VARCHAR(20) not null, team_captain_name VARCHAR(20) not null, team_captain_phone INTEGER not null, team_captain_email VARCHAR(40) not null, player_1_name VARCHAR(20) not null, player_2_name VARCHAR(20) not null, player_3_name VARCHAR(20) not null, player_4_name VARCHAR(20) not null, alternate_phone INTEGER not null, participate VARCHAR(20) not null', function(err, result) {
		if (err) console.log(err);

		client.end(function(err) {
			if (err) console.log(err);
		});
	});
});
