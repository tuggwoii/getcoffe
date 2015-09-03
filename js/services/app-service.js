getcoffe.factory('AppService', function () {

    return {
        getAppMenu: function () {
            return [
                { cssclass: "", text: "List", active: true, icon: "fa-list" },
                { cssclass: "", text: "Map", icon: "fa-map-marker" },
                { cssclass: "user", text: "Owner", icon: "fa-user" }
            ];
        },
        getShops: function () {
            return [
                { name: "De L'Amour", image: "img/shop.png", distance: "0.1", promotion: true, close: false },
                { name: "Love At Rim Ri", image: "img/shop.png", distance: "0.1", promotion: true, close: false },
                { name: "ที่นี่แม่ริม", image: "img/shop.png", distance: "0.1", promotion: false, close: false },
                { name: "Moly Coffe", image: "img/shop.png", distance: "0.1", promotion: false, close: true },
                { name: "บ้านกาแฟไทยๆ", image: "img/shop.png", distance: "0.1", promotion: false, close: false },
                { name: "กาแฟดอยช้าง", image: "img/shop.png", distance: "0.1", promotion: false, close: true },
                { name: "Coffe cup", image: "img/shop.png", distance: "0.1", promotion: true, close: false },
                { name: "Kafae Mai Pee", image: "img/shop.png", distance: "0.1", promotion: true, close: false },
                { name: "กาแฟโบราณ", image: "img/shop.png", distance: "0.1", promotion: true, close: false },
                { name: "Starbucks", image: "img/shop.png", distance: "0.1", promotion: true, close: false }
            ];
        }
    };
});