
getcoffe.factory('AppService', function () {
    'use strict';
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
                { name: "De L'Amour", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/1.png", distance: "0.2", x: 20, y: 50, promotion: true, close: false, openTime: { h: '09', m:'30', z: 'AM'}, closeTime: { h: '07', m: '00', z: 'PM'} },
                { name: "Love At Rim Ri", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/2.png", distance: "0.5", x: 100, y: 45, promotion: true, close: false },
                { name: "ที่นี่แม่ริม", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/3.png", distance: "1.1", x: 50, y: 150, promotion: false, close: false },
                { name: "Starbucks", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/4.png", distance: "1.3", x: 200, y: 150, promotion: true, close: false },
                { name: "Moly Coffe", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/1.png", distance: "1.7", x: 50, y: 300, promotion: false, close: true },
                { name: "บ้านกาแฟไทยๆ", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/2.png", distance: "1.8", x: 144, y: 366, promotion: false, close: false },
                { name: "กาแฟดอยช้าง", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/3.png", distance: "2.1", x: 150, y: 220, promotion: false, close: true },
                { name: "Coffe cup", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/1.png", distance: "2.5", x: 253, y: 358, promotion: true, close: false },
                { name: "Kafae Mai Pee", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/2.png", distance: "3.0", x: 250, y: 200, promotion: true, close: false },
                { name: "กาแฟโบราณ", promotions: this.getPromotions(), menu: this.getMenu(), description: this.getDescription(), image: "img/3.png", distance: "3.2", x: 250, y: 250, promotion: true, close: false }];
        },
        getMenu: function () {
            return [
                { name: 'Espresso', price: '60' },
                { name: 'Americano', price: '60' },
                { name: 'Mocca', price: '55' },
                { name: 'cappuccino', price: '55' },
                { name: 'Latte', price: '55' },
                { name: 'มันทอด', price: '50' },
                { name: 'ปังปิ้ง', price: '20' }];
        },
        getPromotions: function () {
            return [
                { name: 'มา 2 ฟรี 1', exp: {y: '2558', h:'12', z: 'AM', m:'00', mo:'09', d: '25'}},
                { name: 'Espresso ลด 50%', exp: {y: '2558', h:'12', z: 'AM', m:'00', mo:'09', d: '25'}},
                { name: 'กินครบ 5 แก้ว ฟรี 1 แก้ว', exp: {y: '2558', h:'12', z: 'AM', m:'00', mo:'09', d: '25'}}];
        },
        getDescription: function () {
            return 'ร้านกาแฟสำหรับนักท่องเที่ยวและนักศึกษา เหมาะสำหรับทำงานและการอ่านหนังสือ เปิด 24 ชั่วโมง';
        }
    };
});