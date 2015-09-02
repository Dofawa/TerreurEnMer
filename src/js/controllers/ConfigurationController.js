(function() {
  'use strict';

  app.controller('ConfigurationController', function($scope, Storage) {
    // Players count
    $scope.configuration.players = Storage.get('configuration.players', 4);

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
