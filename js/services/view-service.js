getcoffe.factory('ViewService', function () {
    return {
        getMenu: function () {
            return 'views/partials/menu.html'
        },
        getAppView: function () {
            return 'views/app/main.html'
        }
    };
});