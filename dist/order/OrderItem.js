"use strict";
exports.__esModule = true;
exports.OrderItem = void 0;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
        this.orderItems = [];
    }
    /**
     *
     * @param takeTheOrderToCashier set waiter to customer
     */
    OrderItem.prototype.setTakeTheOrderToCashier = function (waiter) {
        this.takeTheOrderToCashier = waiter;
    };
    OrderItem.prototype.getTakeTheOrderToCashier = function () {
        return this.takeTheOrderToCashier;
    };
    OrderItem.prototype.addOrderMenu = function (order) {
        this.orderItems = order.getListOrderMenu();
    };
    OrderItem.prototype.setTableWhereCustomerSit = function (table) {
        this.tableWhereCustomerSit = table;
    };
    OrderItem.prototype.getTableWhereCustomerSit = function () {
        return this.tableWhereCustomerSit;
    };
    OrderItem.prototype.getOrderItem = function () {
        return this.orderItems;
    };
    return OrderItem;
}());
exports.OrderItem = OrderItem;
