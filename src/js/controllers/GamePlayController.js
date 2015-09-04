(function() {
  'use strict';

  app.controller('GamePlayController', function($scope, Storage, LxNotificationService, LxDialogService) {
    function shuffleArray(a) {
      var i, t, j;
      for (i = a.length - 1; i > 0; i -= 1) {
        t = a[i];
        j = Math.floor(Math.random() * (i + 1));
        a[i] = a[j];
        a[j] = t;
      }
      return a;
    }

    $scope.gamePlay.players = Storage.get('gamePlay.players', []);
    $scope.gamePlay.launched = false;
    $scope.gamePlay.savePlayers = function() {
      Storage.set('gamePlay.players', $scope.gamePlay.players);
    };
    $scope.gamePlay.launch = function() {
      $scope.gamePlay.launched = true;
      jQuery('#gamePlay-timer')[0].start();

      // Set players' role to null
      $scope.gamePlay.players = $scope.gamePlay.players.map(function(value) {
        value.role = null;
        return value;
      });
      var players = shuffleArray($scope.gamePlay.players.slice()); // Copy the players array
      $scope.configuration.roles.slice().sort(function(a, b) {
        if (a.playersCount < b.playersCount) {
          return -1;
        } else if (a.playersCount > b.playersCount) {
          return 1;
        } else {
          return 0;
        }
      }).forEach(function(role) { // Set a role to each players
        var player;
        for (var i = 0; i < role.playersCount; i++) {
          if (players.length == 0) {
            return;
          }

          player = players.shift();
          player.role = role.name;
        }
      });
      if (players.length == 0)
        return;

      if ($scope.configuration.defaultRole == null) {
        LxNotificationService.error('Il n\'y pas assez de roles pour tous les joueurs, veuillez définir un rôle par défaut.');
      } else {
        var player;
        for (var i = 0; i < players.length; i++) {
          player = players[i];
          player.role = $scope.configuration.defaultRole.name;
        }
      }
    };

    $scope.gamePlay.resetVotes = function() {
      $scope.gamePlay.players.forEach(function(player) {
        player.votes = null;
      });
    }

    $scope.$watch('configuration.players', function(value) {
      if (typeof value != 'number' || $scope.gamePlay.launched)
        return;

      var newPlayers;
      if ((newPlayers = value - $scope.gamePlay.players.length) > 0) {
        if ($scope.launched)
          return;
        for (var i = 0; newPlayers > i; i++) {
          $scope.gamePlay.players.push({
            nickName: null,
            role: null
          });
        }
      } else {
        $scope.gamePlay.players = $scope.gamePlay.players.slice(0, value);
      }
      Storage.set('configuration.players', value);
    });

    $scope.gamePlay.marry = function(player) {
      $scope.marry.player = player;
      LxDialogService.open('marry');
    }

  });
})();
