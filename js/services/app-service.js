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
                { name: "De L'Amour", image: "img/1.png", distance: "0.2", x: 20, y: 50, promotion: true, close: false },
                { name: "Love At Rim Ri", image: "img/2.png", distance: "0.5", x: 100, y:45, promotion: true, close: false },
                { name: "ที่นี่แม่ริม", image: "img/3.png", distance: "1.1", x: 50, y: 150, promotion: false, close: false },
                { name: "Starbucks", image: "img/4.png", distance: "1.3", x: 200, y: 150, promotion: true, close: false },
                { name: "Moly Coffe", image: "img/1.png", distance: "1.7", x: 50, y: 300, promotion: false, close: true },
                { name: "บ้านกาแฟไทยๆ", image: "img/2.png", distance: "1.8", x: 144, y: 366, promotion: false, close: false },
                { name: "กาแฟดอยช้าง", image: "img/3.png", distance: "2.1", x: 150, y: 220, promotion: false, close: true },
                { name: "Coffe cup", image: "img/1.png", distance: "2.5", x: 253, y: 358, promotion: true, close: false },
                { name: "Kafae Mai Pee", image: "img/2.png", distance: "3.0", x: 250, y: 200, promotion: true, close: false },
                { name: "กาแฟโบราณ", image: "img/3.png", distance: "3.2", x: 250, y: 250, promotion: true, close: false }
            ];
        }
    };
});