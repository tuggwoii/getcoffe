getcoffe.controller('RootController', function ($rootScope, $scope, ViewService) {

    $scope.popup = {
        demonstrate: false
    };

    $scope.onStartup = function () {
        $scope.menu = ViewService.getMenu();
    };
    
    $scope.openDemo = function () {
        $scope.popup.content = false;
        $rootScope.$broadcast('triggerMenu', 'Demonstrate');
    };
    
     $scope.openProblems = function () {
        $scope.contentMode = 'pb';
        $rootScope.$broadcast('triggerMenu', 'Problems');
    };
    
    $scope.openSolutions = function () {
        $scope.contentMode = 'sl';
        $rootScope.$broadcast('triggerMenu', 'Solutions');
    };
    
    $scope.openMembers = function () {
        $scope.contentMode = 'mb';
        $rootScope.$broadcast('triggerMenu', 'Members');
    };
    
    $scope.openContact = function() {
        $scope.contentMode = 'ct';
        $rootScope.$broadcast('triggerMenu', 'Contact');
    }
    
    
    $scope.close = function () {
        $scope.popup.demonstrate = false;
        $scope.popup.content = false;
        $rootScope.$broadcast('clearMenuActive');
        $('.contenePopup').addClass('zoomOut');
    };
    
    $scope.$on('menuClick',function(e, d) {
        if (d == 'Problems') {
           $scope.contentMode = 'pb';
        }
        else if(d == 'Solutions') {
            $scope.contentMode = 'sl';
        }
        else if(d == 'Members') {
            $scope.contentMode = 'mb';
        }
        else if(d == 'Contact') {
           $scope.contentMode = 'ct';
        }
    });
    
    $scope.onStartup();
});