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
exports.Chef = void 0;
var Staff_1 = require("./Staff");
var Menu_1 = require("../../menu/Menu");
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(category, name, age, gender) {
        var _this = _super.call(this, category, name, age, gender) || this;
        _this.listMenu = [];
        return _this;
    }
    Chef.prototype.addMenu = function (menu) {
        this.listMenu = menu.getOrderItem();
    };
    Chef.prototype.getMenu = function () {
        return this.listMenu;
    };
    Chef.prototype.chefWillDo = function () {
        var cook = false; //Defual
        var prepare = false; //Defual
        this.getMenu().forEach(function (menu) {
            if (menu.getMenuType() === Menu_1.MenuCategory.FOOD) {
                cook = true;
            }
            else {
                prepare = true;
            }
        });
        if (prepare && cook) {
            return "Chef must to cook and prepare";
        }
        else if (!prepare && cook) {
            return 'Chef must to cook';
        }
        else if (prepare && !cook) {
            return 'Chef must to prepare Only';
        }
        else {
            return 'Doing nothing';
        }
    };
    Chef.prototype.setWaitToTaktheItem = function (waiter) {
        this.waiterTakeItemsToCustomer = waiter;
    };
    return Chef;
}(Staff_1.Staff));
exports.Chef = Chef;
