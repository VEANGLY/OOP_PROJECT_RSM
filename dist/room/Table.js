"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(tableID, maxChairs) {
        this.tableID = tableID;
        this.maxChairs = maxChairs;
        this.customers = [];
    }
    /**
     *
     * @param customer Add customer to table
     */
    Table.prototype.addCustomer = function () {
        var customer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customer[_i] = arguments[_i];
        }
        if (this.isTableFree()) {
            this.customers = this.customers.concat(customer);
        }
    };
    /**
     *
     * @returns all customers
     */
    Table.prototype.getCustomer = function () {
        return this.customers;
    };
    /**
     *
     * @returns true is room is free
     */
    Table.prototype.isTableFree = function () {
        return this.maxChairs < this.getCustomer().length;
    };
    /**
     *
     * @returns number of customers
     */
    Table.prototype.numberOfCustomerOnTable = function () {
        return this.getCustomer().length;
    };
    /**
     *
     * @returns true if have customer at least one
     */
    Table.prototype.hasCustomer = function () {
        return (this.customers.length > 0);
    };
    /**
     * Set customerID to tableID
     */
    Table.prototype.setCustomerIDToTableID = function () {
        var _this = this;
        this.customers.forEach(function (customer) {
            customer.setCustomerID(_this.tableID);
        });
    };
    return Table;
}());
exports.Table = Table;
