(function() {
  'use strict';

  app.controller('ConfigurationController', function($scope, Storage) {
    // Players count
    $scope.configuration.players = Storage.get('configuration.players', 4);
    $scope.$watch('configuration.players', function(value) {
      if (typeof value != 'number' || $scope.gamePlay.launched)
        return;

      var newPlayers;
      if ((newPlayers = value - $scope.gamePlay.players.length) > 0) {
        if ($scope.launched)
          return;
        for (var i = 0; newPlayers > i; i++) {
          $scope.gamePlay.players.push({ nickName: null, role: null });
        }
      } else {
        $scope.gamePlay.players = $scope.gamePlay.players.slice(0, value);
      }
      Storage.set('configuration.players', value);
    });

    // Roles
    $scope.configuration.roles = Storage.get('configuration.roles', []);
    $scope.configuration.defaultRole = null;
    $scope.configuration.saveRoles = function () {
      Storage.set('configuration.roles', $scope.configuration.roles);
    }
    $scope.configuration.addRole = function() {
      $scope.configuration.roles.push({ playersCount: 1 });
      $scope.configuration.saveRoles();
    }
    $scope.configuration.removeRole = function(index) {
      $scope.configuration.roles.splice(index, 1);
      $scope.configuration.saveRoles();
    }
  });
})();
