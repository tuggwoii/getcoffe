getcoffe.controller('RootController', function ($rootScope, $scope, ViewService) {

    $scope.popup = {
        demonstrate: false
    };

    $scope.onStartup = function () {
        $scope.menu = ViewService.getMenu();
    };
    
    $scope.openDemo = function () {
        $rootScope.$broadcast('triggerMenu', 'Demonstrate');
    };

    $scope.onStartup();
});