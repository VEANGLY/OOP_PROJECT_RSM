"use strict";
exports.__esModule = true;
exports.MenuItem = exports.QuantityItem = void 0;
var QuantityItem;
(function (QuantityItem) {
    QuantityItem["SMALL"] = "small";
    QuantityItem["MEDIUM"] = "medium";
    QuantityItem["MASSIVE"] = "massive";
})(QuantityItem = exports.QuantityItem || (exports.QuantityItem = {}));
var MenuItem = /** @class */ (function () {
    function MenuItem(title, description, price, quantity) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
    return MenuItem;
}());
exports.MenuItem = MenuItem;
