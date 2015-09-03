getcoffe.controller('DemonstrateController', function ($rootScope, $scope, $timeout, ViewService, DemonstrateService) {

    $scope.bootsApp = function () {
        if (!$scope.appStart) {
            $scope.appStart = true;
        }       
    };

    $scope.ready = function () {
        $scope.appReady = true;
    };

    $scope.onStartup = function () {
        $timeout($scope.ready, 1000);
    };

    $scope.close = function () {
        $scope.popup.demonstrate = false;
        $rootScope.$broadcast('clearMenuActive');
    };

    $scope.onStartup();

});