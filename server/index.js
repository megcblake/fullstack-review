const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var helpers = require('./../helpers/github.js');
var db = require('./../database/index.js');

app.use(bodyParser());

app.use(morgan('tiny'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.retrieve((err, posts) => {
  	if (err) {
  		res.status(404).end();
  	} else {
  		res.send(JSON.stringify(posts))
  	}
  })
});

app.post('/repos', (req, res) => {
	var user = req.body.term;
	helpers.getReposByUsername(user, (err, result, body) => {
    var info = JSON.parse(body);
    var data = info.map(repo => {
    	return {
		    id: repo.id,
		    name: repo.name,
		    user: {
		      name: repo.owner.login,
		      id: repo.owner.id,
		    },
		    link: repo.html_url,
		    forks: repo.forks_count
		  }
    });
    db.save(data, (err) => {
    	if (err) {
    		res.send(404).end();
    	} else {
    		res.send(JSON.stringify(data));
    	}
    });
	});
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

