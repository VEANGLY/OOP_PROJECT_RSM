"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(customerID) {
        this.customerID = customerID;
    }
    Customer.prototype.setCustomerID = function (id) {
        this.customerID = id;
    };
    return Customer;
}());
exports.Customer = Customer;
