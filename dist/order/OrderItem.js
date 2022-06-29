"use strict";
exports.__esModule = true;
exports.OrderItem = void 0;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    /**
     *
     * @param waiter set waiter to customer
     */
    OrderItem.prototype.setWaiter = function (waiter) {
        this.waiter = waiter;
    };
    /**
     *
     * @returns
     */
    OrderItem.prototype.hasWaiter = function () {
        return this.waiter;
    };
    /**
     * get cashier to customer
     */
    OrderItem.prototype.setCashier = function (cashier) {
        this.cashier = cashier;
    };
    OrderItem.prototype.hasCashier = function () {
        return this.waiter;
    };
    OrderItem.prototype.setOrderItem = function (orderItem) {
        this.orderItem = orderItem;
    };
    OrderItem.prototype.setTableID = function (newTable) {
        this.table = newTable;
    };
    return OrderItem;
}());
exports.OrderItem = OrderItem;
