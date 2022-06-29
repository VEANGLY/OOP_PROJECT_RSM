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
exports.Chef = exports.ChefStatus = void 0;
var Staff_1 = require("./Staff");
var ChefStatus;
(function (ChefStatus) {
    ChefStatus[ChefStatus["COOKING"] = 0] = "COOKING";
    ChefStatus[ChefStatus["COOKED"] = 1] = "COOKED";
})(ChefStatus = exports.ChefStatus || (exports.ChefStatus = {}));
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(category, name, age, gender) {
        var _this = _super.call(this, category, name, age, gender) || this;
        _this.chefStatus = ChefStatus.COOKED;
        return _this;
    }
    Chef.prototype.setFoodForChef = function (food) {
        this.foods = food;
    };
    Chef.prototype.isChefFree = function () {
        return this.foods !== undefined;
    };
    Chef.prototype.chefStatusNow = function () {
        if (this.isChefFree()) {
            return this.chefStatus = ChefStatus.COOKING;
        }
        else {
            return this.chefStatus = ChefStatus.COOKED;
        }
    };
    Chef.prototype.unSetFoodToChef = function (food) {
        return this.foods = undefined;
    };
    return Chef;
}(Staff_1.Staff));
exports.Chef = Chef;
