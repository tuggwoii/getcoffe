getcoffe.factory('MenuService', function () {
    var menu = [
         { text: 'Problems' },
         { text: 'Solutions' },
         { text: 'Demonstrate' },
         { text: 'Members' },
         { text: 'Contact' }
    ];

    return {
        getMenu: function () {
            return menu;
        },
        clearActive: function () {
            menu.filter(function (item) {
                item.active = false;
            });
        }
    };
});