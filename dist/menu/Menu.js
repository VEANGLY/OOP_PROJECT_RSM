"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Menu = exports.MenuCategory = void 0;
var MenuItem_1 = require("./MenuItem");
var MenuCategory;
(function (MenuCategory) {
    MenuCategory["DRINK"] = "Drink";
    MenuCategory["FOOD"] = "Food";
    MenuCategory["DESSERT"] = "Dessert";
    MenuCategory["ICECREAM"] = "Ice Cream";
    MenuCategory["SNACK"] = "Snack";
})(MenuCategory = exports.MenuCategory || (exports.MenuCategory = {}));
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(typemenu, title, description, price, quantity) {
        var _this = _super.call(this, title, description, price, quantity) || this;
        _this.typemenu = typemenu;
        return _this;
    }
    /**
     *
     * @param number Return update price
     */
    Menu.prototype.updatePrice = function (price) {
        this.price = price;
    };
    Menu.prototype.getPrice = function () {
        return this.price;
    };
    ;
    Menu.prototype.getFoodName = function () { return this.title; };
    ;
    Menu.prototype.getQuantity = function () { return this.quantity; };
    ;
    Menu.prototype.getMenuType = function () { return this.typemenu; };
    ;
    return Menu;
}(MenuItem_1.MenuItem));
exports.Menu = Menu;
