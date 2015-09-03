getcoffe.controller('MenuController', function ($scope, ViewService, MenuService) {

    $scope.onStartup = function () {
        $scope.menuItems = MenuService.getMenu();
    };

    $scope.openDemo = function () {

    };

    $scope.menuClick = function (menu) {
        MenuService.clearActive();
        menu.active = true;

        if (menu.text === 'Demonstrate') {
            $scope.popup.demonstrate = true;
        }
    }

    $scope.$on('clearMenuActive', function () {
        MenuService.clearActive();
    });

    $scope.$on('triggerMenu', function (event, text) {
        var triggerMenu = $scope.menuItems.filter(function (menu) {
            if (menu.text === text) {
                return menu;
            }
        });
        if (triggerMenu.length > 0) {
            $scope.menuClick(triggerMenu[0]);
        }
    });

    $scope.onStartup();
});