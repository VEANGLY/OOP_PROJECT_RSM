"use strict";
exports.__esModule = true;
exports.Kitchen = void 0;
var Kitchen = /** @class */ (function () {
    function Kitchen() {
        this.listOrders = [];
        this.cookers = [];
    }
    Kitchen.prototype.addChefToKitchen = function (chef) {
        this.cookers.push(chef);
    };
    Kitchen.prototype.getChef = function () {
        return this.cookers;
    };
    Kitchen.prototype.addOrderItemsToKitchen = function (orderItems) {
        this.listOrders = orderItems.getListOrderMenu();
    };
    Kitchen.prototype.getListOrderMenuOfKitchen = function () {
        return this.listOrders;
    };
    Kitchen.prototype.getToCookOrPrepare = function () {
        for (var i = 0; i < this.isChefEqualToMenu(); i++) {
            this.getChef()[i].addMenu(this.getListOrderMenuOfKitchen()[i]);
        }
    };
    Kitchen.prototype.isChefFree = function () {
        return this.getChef().length > this.getListOrderMenuOfKitchen().length;
    };
    Kitchen.prototype.isMenuFree = function () {
        return this.getChef().length < this.getListOrderMenuOfKitchen().length;
    };
    Kitchen.prototype.isChefEqualToMenu = function () {
        if (this.isChefFree()) {
            return this.getChef().length;
        }
        else {
            return this.getListOrderMenuOfKitchen().length;
        }
    };
    Kitchen.prototype.isKitchenFree = function () {
        return (0 < this.getChef().length && 0 < this.getListOrderMenuOfKitchen().length);
    };
    return Kitchen;
}());
exports.Kitchen = Kitchen;
