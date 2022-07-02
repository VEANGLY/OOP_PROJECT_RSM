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
exports.Cashier = void 0;
var Staff_1 = require("./Staff");
var Cashier = /** @class */ (function (_super) {
    __extends(Cashier, _super);
    function Cashier(category, name, age, gender) {
        var _this = _super.call(this, category, name, age, gender) || this;
        _this.listOrders = [];
        return _this;
    }
    Cashier.prototype.setListorder = function (listOrder) {
        this.listOrders = listOrder.getListOrderMenu();
    };
    Cashier.prototype.getListorder = function () {
        return this.listOrders;
    };
    /**
     * Print the payment to customer
     */
    Cashier.prototype.printBillingForCutomer = function () {
        var _this = this;
        this.getListorder().forEach(function (listOrder) {
            var totalPrice = 0; //defualt
            console.log('- Table_ID: ' + listOrder.getTableWhereCustomerSit().getTableId());
            console.log('- Waiter_Name: ' + listOrder.getTakeTheOrderToCashier().getStaffName());
            listOrder.getOrderItem().forEach(function (orderItem) {
                totalPrice += orderItem.getPrice();
                console.log('- Food_Name: ' + orderItem.getFoodName() + " and price is: " + orderItem.getPrice() + "$");
                console.log('- Quantity order: ' + orderItem.getQuantity());
            });
            console.log('- Total: ' + totalPrice + "$");
            console.log('- Cashier_Name: ' + _this.name);
            console.log('- Date: ' + _this.date.getDay() + ', ' + _this.date.getMonth() + ', ' + _this.date.getYear() + ', ' + _this.date.getTime());
        });
    };
    Cashier.prototype.setDateTime = function (datetime) {
        return this.date = datetime;
    };
    return Cashier;
}(Staff_1.Staff));
exports.Cashier = Cashier;
