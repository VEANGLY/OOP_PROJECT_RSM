"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var CalendarManager_1 = require("./calendar/CalendarManager");
var HumanManager_1 = require("./human/HumanManager");
var RoomManager_1 = require("./room/RoomManager");
var OrderManager_1 = require("./order/OrderManager");
var MenuManager_1 = require("./menu/MenuManager");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        // public services
        this.calendar = new CalendarManager_1.CalendarManager();
        this.rooms = new RoomManager_1.RoomsManager();
        this.hr = new HumanManager_1.HumanManager();
        this.Order = new OrderManager_1.OrderManager();
        this.menu = new MenuManager_1.MenuManager();
        this.name = name;
        this.address = address;
    }
    return Restaurant;
}());
exports.Restaurant = Restaurant;
