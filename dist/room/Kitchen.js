"use strict";
exports.__esModule = true;
exports.Kitchen = void 0;
var Chef_1 = require("../human/staff/Chef");
var Kitchen = /** @class */ (function () {
    function Kitchen() {
        this.orderMenu = [];
        this.chelves = [];
    }
    Kitchen.prototype.getItems = function () {
        return this.takeItemFromTableToKitchen.takeItemFromTableToKitchen();
    };
    Kitchen.prototype.addOrderItems = function () {
        this.orderMenu.push(this.getItems());
    };
    Kitchen.prototype.addChefToKitchen = function (chef) {
        this.chelves.push(chef);
    };
    /***
     * Find the chef who is currently free to take responsibility
     */
    Kitchen.prototype.getCooking = function () {
        var _this = this;
        this.orderMenu.forEach(function (item) {
            _this.chelves.forEach(function (chef) {
                if (Chef_1.ChefStatus.COOKED == chef.chefStatusNow()) {
                    chef.setFoodForChef(item);
                }
                else {
                    _this.takeItemFromKitchenToTable.takeItemFromKitchenToTable(item);
                    chef.unSetFoodToChef(item);
                }
            });
        });
    };
    return Kitchen;
}());
exports.Kitchen = Kitchen;
