getcoffe.controller('MemberController', function ($rootScope, $scope, $timeout) {

    $scope.members = [];
    $scope.memberList = [];
    
    $scope.startUp = function () {
          $scope.members = [
              { name: '1. นายสุนทร แหยมคง 580632021', img: 'img/1.jpg', class: 'slideInLeft'},
              { name: '2. นายณัฐพงษ์ คงมั่น 580632013', img: 'img/2.jpg', class: 'slideInRight'},
              { name: '3. นายณัฐวัฒน์ พยาราษฎร์ 580632014', img: 'img/3.jpg', class: 'slideInLeft'},
              { name: '4. นายวชิรวิทย์  ริมชลการ 570632105', img: 'img/4.jpg', class: 'slideInRight'},
              { name: '5. นายสมพงษ์ บำรุงพงศ์ 580632062', img: 'img/5.jpg', class: 'slideInLeft'},
          ];
        
        $timeout(function () {
            $scope.memberList.push($scope.members[0]);
        },1000);
        $timeout(function () {
           $scope.memberList.push($scope.members[1]);
        },1500);
        $timeout(function () {
           $scope.memberList.push($scope.members[2]);
        },2000);
        $timeout(function () {
           $scope.memberList.push($scope.members[3]);
        },2500);
        $timeout(function () {
           $scope.memberList.push($scope.members[4]);
        },3000);
    };

    
     $scope.startUp();
});