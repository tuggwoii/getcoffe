getcoffe.controller('AppController', function ($rootScope, $scope, $timeout, ViewService, DemonstrateService, AppService) {

    $scope.app = {};

    $scope.onStartup = function () {
        $scope.app.menuItem = AppService.getAppMenu();
        $scope.app.shops = AppService.getShops();
        $timeout(function () {
            var myScroll;

            myScroll = new IScroll('#wrapper', {
                scrollbars: false,
                mouseWheel: true,
                interactiveScrollbars: true,
                fadeScrollbars: false
            });

            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

        }, 500);
    };

    $scope.clearMenuActive = function () {
        $scope.app.menuItem.filter(function (item) {
            item.active = false;
        });
    };

    $scope.menuClick = function (menu) {
        $scope.clearMenuActive();
        menu.active = true;
    };

    $scope.onStartup();

});