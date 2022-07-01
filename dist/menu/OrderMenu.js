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
exports.OrderMenu = void 0;
var Menu_1 = require("./Menu");
var OrderMenu = /** @class */ (function (_super) {
    __extends(OrderMenu, _super);
    function OrderMenu(id, typemenu, title, description, price, quantity) {
        var _this = _super.call(this, typemenu, title, description, price, quantity) || this;
        _this.id = id;
        return _this;
    }
    return OrderMenu;
}(Menu_1.Menu));
exports.OrderMenu = OrderMenu;
