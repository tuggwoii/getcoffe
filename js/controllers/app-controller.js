getcoffe.controller('AppController', function ($rootScope, $scope, $timeout, ViewService, DemonstrateService, AppService) {

    var myScroll;
    $scope.app = {};
    $scope.app.pushNotification = {};
    $scope.scrollTimeout = {};
    $scope.tab = "info";
    
    $scope.onStartup = function () {
        $scope.tab = "info";
        $scope.pushSend = false;
        $scope.app.menuItem = AppService.getAppMenu();
        $scope.app.view = 'list';
        $scope.app.shops = AppService.getShops();
        $scope.app.menu = AppService.getMenu();
        $timeout(function () {
            $scope.setScroll();
        }, 1500);
    };
  
    $scope.setScroll = function () {
        console.log('set scroll');
        $timeout.cancel($scope.scrollTimeout);
        $scope.scrollTimeout = $timeout(function () {
            if ($('#wrapper').length) {
                myScroll = new IScroll('#wrapper', {
                    mouseWheel: true,
                    interactiveScrollbars: true
                });
            }
        }, 500);
    };
    
     $scope.setInnerScroll = function () {
        console.log('set scroll');
        $timeout.cancel($scope.scrollTimeout);
        $scope.scrollTimeout = $timeout(function () {
            if ($('#innerWrapper').length) {
                myScroll = new IScroll('#innerWrapper', {
                    mouseWheel: true,
                    interactiveScrollbars: true
                });
            }
        }, 200);
    };

    $scope.clearMenuActive = function () {
        $scope.app.menuItem.filter(function (item) {
            item.active = false;
        });
    };

    $scope.listView = function () {
        $scope.app.view = 'list';
        $scope.setScroll();
      
    }

    $scope.showPush = function () {
        $scope.displayNotification = true;
        $timeout(function() {
              $scope.clearPushNotification();
        }, 10000);
        $timeout(function(){
            $('.appBody').css('margin-top',(0 - ($('.pushNotification').height() + 20)) + 'px');
        },0);
        
    };
    
    $scope.pushClick = function () {
        $scope.openDetail($scope.app.shops[0]);
         $timeout(function() {
              $scope.clearPushNotification();
        }, 1000);
    };
    
    $scope.clearPushNotification = function () {
        $scope.displayNotification = false;
        $scope.app.pushNotification = {};
        $timeout(function() {
               $('.appBody').css('margin-top','0px');
        }, 750);
        
    };
    
    $scope.menuClick = function (menu) {
        $scope.clearMenuActive();
        menu.active = true;
        if (menu.text === 'Map') {
            $scope.app.view = 'map';
            if($scope.app.pushNotification) {
                if($scope.app.pushNotification.promotions) {
                    if($scope.app.pushNotification.promotions.length) {
                        $scope.showPush();
                        console.log('here');
                    }
                }
            }
        }
        else if (menu.text === 'List') {
            $scope.listView();
            if($scope.app.pushNotification) {
                if($scope.app.pushNotification.promotions) {
                    if($scope.app.pushNotification.promotions.length) {
                        $scope.showPush();
                        console.log('here');
                    }
                }
            }
        }
        else if (menu.text === 'Owner') {
            $scope.setScroll();
            $scope.currentShop =  $scope.app.shops[0];
            $scope.app.view = 'owner';
            $scope.showSetting = false;
            $scope.showInfo = false;
        }
    };

    $scope.openDetail = function (shop) {
        $scope.currentShop = shop;
        console.log($scope.currentShop);
        if (myScroll && !myScroll.moved) {
            $scope.app.view = 'detail';
            $scope.clearMenuActive();
            $scope.setScroll();
        }
        else if ( $scope.app.view == 'map') {
            $scope.app.view = 'detail';
            $scope.clearMenuActive();
            $scope.setScroll();
        }
    }
    
    $scope.toggleOnOff = function () {
        if($scope.currentShop.close) {
            $scope.currentShop.close = false;
        }
        else {
            $scope.currentShop.close = true;
        }
    };
    
    $scope.openSetting = function () {
        $scope.showSetting = true;
        $scope.showInfo = false;
        setTimeout(function(){
           $scope.$apply(); 
        }, 500);
    };
    
     $scope.openInfo = function () {
        $scope.showInfo = true;
        $scope.showSetting = false;
        $scope.tab = "info";
    };
    
    $scope.closeSetting = function () {
        $scope.showSetting = false;
        $scope.showInfo = false;
        $scope.setScroll();
        
        $scope.currentShop.promotions = $scope.currentShop.promotions.filter(function(i){
           if(i.name) {
                return i;
           }
        });
        $scope.currentShop.menu = $scope.currentShop.menu.filter(function(j){
           if(j.name && j.price) {
                return j;
           }
        });
        console.log($scope.currentShop.menu);
    };

    $scope.getTimes = function (n) {
        return new Array(n);
    };
    
    $scope.promotionTab = function () {
        $scope.tab = "promotion";
         $scope.setInnerScroll();
         $scope.pushSend = false;
    };
    $scope.infoTab = function () {
        $scope.tab = "info";
         $scope.setInnerScroll();
    };
    $scope.menuTab = function () {
        $scope.tab = "menu";
         $scope.setInnerScroll();
    };
    $scope.addPromotion = function () {
        $scope.currentShop.promotions.push({});
        $scope.setInnerScroll();
        $timeout(function(){
            myScroll.scrollTo(0, myScroll.maxScrollY, 0);
        }, 300);
    };
    $scope.deletePromotion = function (index) {
        $scope.currentShop.promotions.splice(index, 1);
         $scope.setInnerScroll();
         $timeout(function(){
            myScroll.scrollTo(0, 0, 0);
        }, 300);
    };
    $scope.addMenu = function () {
        $scope.currentShop.menu.push({});
        $scope.setInnerScroll();
        $timeout(function(){
            myScroll.scrollTo(0, myScroll.maxScrollY, 0);
        }, 300);
    };
    $scope.deleteMenu= function (index) {
        $scope.currentShop.menu.splice(index, 1);
         $scope.setInnerScroll();
         $timeout(function(){
            myScroll.scrollTo(0, 0, 0);
        }, 300);
    };
    
    $scope.addPush = function () {
        $scope.app.pushNotification = $scope.currentShop;
        $scope.pushSend = true;
    }
    
    $scope.onStartup();

});