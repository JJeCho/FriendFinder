var path = require("path");

module.exports = function (app) {
    var people = require('../data/friends.js')

    app.get('/api/friends', function (req, res) {
        res.json(people);
    });
    app.post('/api/friends', function (req, res) {
        var person = {
            name: "",
            photo: "",
            scores: []
        }
        person.name = req.body.name;
        person.photo = "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg";
        person.scores.push(parseInt(req.body.q1), parseInt(req.body.q2), parseInt(req.body.q3), parseInt(req.body.q4), parseInt(req.body.q5), parseInt(req.body.q6), parseInt(req.body.q7), parseInt(req.body.q8), parseInt(req.body.q9), parseInt(req.body.q10));
        var mostCompatible = -1;
        var highestScore = 0;
        for(var i=0; i<people.length; i++) {
            var total = 0;
            for(var j=0; j<people[i].scores.length; j++) {
                total += Math.abs(parseInt(person.scores[j]) - parseInt(people[i].scores[j]));
            }
            if(total > highestScore) {
                mostCompatible = i;
                highestScore = total;
            }
        }
        people.push(person);

        res.send(people[mostCompatible]);
    });
};