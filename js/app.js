var getcoffe = angular.module('app', ['ngAnimate']);
app = {
    module: {},
    onInit: function () {
        $(document).ready(this.onReady);
    },
    onReady: function () {
        angular.bootstrap(document, ['app']);
    }
};
app.onInit();