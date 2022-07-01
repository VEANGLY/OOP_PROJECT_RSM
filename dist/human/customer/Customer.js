"use strict";
exports.__esModule = true;
exports.Customer = exports.CustomerStatus = void 0;
var CustomerStatus;
(function (CustomerStatus) {
    CustomerStatus["EATING"] = "EATING";
    CustomerStatus["WAITING"] = "WAITING";
    CustomerStatus["COMPLETED"] = "COMPLETED";
})(CustomerStatus = exports.CustomerStatus || (exports.CustomerStatus = {}));
var Customer = /** @class */ (function () {
    function Customer(status) {
        this.status = status;
        this.payment = 0; //default payment
        this.customerID = 0; //default id
    }
    Customer.prototype.setCustomerID = function (id) {
        this.customerID = id;
    };
    Customer.prototype.getCustomerID = function () {
        return this.customerID;
    };
    Customer.prototype.setPayment = function (payment) {
        this.payment = payment;
    };
    Customer.prototype.getPayment = function () {
        return this.payment;
    };
    return Customer;
}());
exports.Customer = Customer;
