getcoffe.controller('MenuController', function ($rootScope, $scope, ViewService, MenuService) {

    $scope.onStartup = function () {
        $scope.menuItems = MenuService.getMenu();
    };

    $scope.openDemo = function () {

    };
    
    $scope.openProblems = function () {
        $scope.popup.content = true;
        $scope.popup.demonstrate = false;
         $rootScope.$broadcast('menuClick', 'Problems');
    };
    
    $scope.openSolutions = function () {
        $scope.popup.content = true;
        $scope.popup.demonstrate = false;
         $rootScope.$broadcast('menuClick', 'Solutions');
    };
    
    $scope.openMembers = function () {
        $scope.popup.content = true;
        $scope.popup.demonstrate = false;
         $rootScope.$broadcast('menuClick', 'Members');
    };
    
    $scope.openContact = function() {
        $scope.popup.content = true;
        $scope.popup.demonstrate = false;
        $rootScope.$broadcast('menuClick', 'Contact');
    }


    $scope.menuClick = function (menu) {
        MenuService.clearActive();
        menu.active = true;
        if (menu.text === 'Demonstrate') {
             $scope.popup.content = false;
             $scope.popup.demonstrate = true;
        }
        else if(menu.text === 'Problems') {
            $scope.openProblems();
        }
        else if(menu.text === 'Solutions') {
            $scope.openSolutions();
        }
        else if(menu.text === 'Members') {
            $scope.openMembers();
        }
         else if(menu.text === 'Contact') {
            $scope.openContact();
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