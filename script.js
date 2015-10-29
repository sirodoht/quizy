angular.module('scoreApp', [])
  .controller('ScoreCtrl', function() {
    var score = this;

    score.team = [0, 0];

    score.correct = function(teamNumber) {
      score.team[teamNumber] = score.team[teamNumber] + 1;
    }
  });
