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
    function Customer(customerID, status) {
        this.customerID = customerID;
        this.status = status;
        this.payment = 0; //default payment
    }
    Customer.prototype.setCustomerID = function (id) {
        this.customerID = id;
    };
    return Customer;
}());
exports.Customer = Customer;
