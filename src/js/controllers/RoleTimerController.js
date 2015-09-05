(function() {
  'use strict';

  app.controller('RoleTimerController', function($scope, LxNotificationService, Storage) {
    $scope.$watch('countdown', function(newValue, oldValue) {
      if (newValue == 0 && oldValue > newValue) {
        alert('Compteur de role fini !');
      }
    });
  });
})();
