"use strict";
exports.__esModule = true;
exports.MenuManager = void 0;
var MenuManager = /** @class */ (function () {
    function MenuManager() {
        this.priceOff = 0; //default
        this.listOrerMenu = [];
    }
    MenuManager.prototype.setDayOff = function (relax) {
        this.dayOff = relax;
    };
    MenuManager.prototype.getIsDayOff = function () {
        return this.dayOff;
    };
    MenuManager.prototype.setPriceOff = function (price) {
        this.priceOff = price;
    };
    MenuManager.prototype.getPriceOff = function () {
        return this.priceOff;
    };
    /**
     * Set the price all the items item
     */
    MenuManager.prototype.setPriceOffAllMenu = function () {
        var _this = this;
        if (this.getIsDayOff().getDayOff()) {
            this.getListOrderMenu().forEach(function (item) {
                item.updatePrice(item.getPrice() * _this.getPriceOff() / 100);
            });
        }
    };
    /**
     *
     * @param orderItem add to list customer who order
     */
    MenuManager.prototype.addOrderItems = function () {
        var orderItem = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            orderItem[_i] = arguments[_i];
        }
        this.listOrerMenu = this.listOrerMenu.concat(orderItem);
    };
    /**
     *
     * @returns List of menu items
     */
    MenuManager.prototype.getListOrderMenu = function () {
        return this.listOrerMenu;
    };
    return MenuManager;
}());
exports.MenuManager = MenuManager;
