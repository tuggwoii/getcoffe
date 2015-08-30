getcoffe.controller('RootController', function ($scope, ViewService) {
    $scope.menu = ViewService.getMenu();
});