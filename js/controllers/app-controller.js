getcoffe.controller('AppController', function ($rootScope, $scope, $timeout, ViewService, DemonstrateService, AppService) {

    var myScroll;
    $scope.app = {};

    $scope.onStartup = function () {
        $scope.app.menuItem = AppService.getAppMenu();
        $scope.app.view = 'list';
        $scope.app.shops = AppService.getShops();
        $timeout(function () {
            myScroll = new IScroll('#wrapper', {
                mouseWheel: true,
                interactiveScrollbars: true
            });
        }, 2000);

    };

    $scope.clearMenuActive = function () {
        $scope.app.menuItem.filter(function (item) {
            item.active = false;
        });
    };

    $scope.listView = function () {
        $scope.app.view = 'list';
      
        $timeout(function () {
            if ($('#wrapper').length) {
                
                myScroll = new IScroll('#wrapper', {
                    mouseWheel: true,
                    interactiveScrollbars: true
                });
            }
         }, 1000);
    }

    $scope.menuClick = function (menu) {
        $scope.clearMenuActive();
        menu.active = true;
        if (menu.text === 'Map') {
            $scope.app.view = 'map';
        }
        else if (menu.text === 'List') {
            $scope.listView();
        }
        else if (menu.text === 'Owner') {
            $scope.currentShop =  $scope.app.shops[0];
            $scope.app.view = 'owner';
        }
    };

    $scope.openDetail = function (shop) {
        $scope.currentShop = shop;
        if (myScroll && !myScroll.moved) {
            $scope.app.view = 'detail';
            $scope.clearMenuActive();
        }
        else if ( $scope.app.view == 'map') {
            $scope.app.view = 'detail';
            $scope.clearMenuActive();
        }
    }

    $scope.onStartup();

});