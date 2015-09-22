getcoffe.controller('DemonstrateController', function ($rootScope, $scope, $timeout, ViewService, DemonstrateService) {

    $scope.mouseDown = false;
    $scope.mouse = {};
    $scope.top = 0;
    
    $scope.bootsApp = function () {
        if (!$scope.appStart) {
            $scope.appStart = true;
            $scope.appView = ViewService.getAppView();
        }       
    };
    
    $scope.setMouseEvent = function () {
        $('.demoView').on('mousedown', function() {
            $scope.mouseDown = true;
        });
        $(document).on('mouseup', function() {
            $scope.mouseDown = false;
            $scope.mouse.y = 0;
        });
        $('.demoView').on('mousemove', function(e) {
            if($scope.mouseDown) {
                var el = $(e.target);
                var isDragFrame = true;
                if(el.attr('class')) {
                    isDragFrame = !(el.attr('class').indexOf('appScreen') > -1  || el.parents('.appScreen').length);
                }
                else {
                    isDragFrame = !el.parents('.appScreen').length
                }
                if(isDragFrame) {
                    if($scope.mouse.y) {
                        var diff = $scope.mouse.y - e.pageY;
                        $scope.mouse.y = e.pageY;
                        $scope.top -= (diff)
                        $('.demoView').css('top', ( $scope.top)+'px');
                    }
                    else {
                        $scope.mouse.y = e.pageY;
                    }
                }
            }
        });
    }

    $scope.ready = function () {
        $('img').on('dragstart', function(event) { event.preventDefault(); });
        $scope.setMouseEvent();
        $scope.appReady = true;
    };

    $scope.onStartup = function () {
        $timeout($scope.ready, 1000);
    };

    $scope.close = function () {
        $scope.popup.demonstrate = false;
        $scope.popup.content = false;
        $rootScope.$broadcast('clearMenuActive');
        $('.demonstrate').addClass('zoomOut');
       
    };

    $scope.onStartup();

});