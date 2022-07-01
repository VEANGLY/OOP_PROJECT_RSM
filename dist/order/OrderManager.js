"use strict";
exports.__esModule = true;
exports.OrderManager = void 0;
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.listOrerMenu = [];
    }
    OrderManager.prototype.addOrderMenuToListOrder = function (order) {
        this.listOrerMenu.push(order);
    };
    OrderManager.prototype.getListOrderMenu = function () {
        return this.listOrerMenu;
    };
    return OrderManager;
}());
exports.OrderManager = OrderManager;
