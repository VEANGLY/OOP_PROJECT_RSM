"use strict";
exports.__esModule = true;
exports.DateTime = void 0;
var DateTime = /** @class */ (function () {
    function DateTime(day, month, year, time) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.time = time;
    }
    DateTime.prototype.isEqual = function (other) {
        return (this.day === other.day &&
            this.month === other.month &&
            this.year === other.year &&
            this.time === other.time);
    };
    DateTime.prototype.getDay = function () { return this.day; };
    DateTime.prototype.getMonth = function () { return this.month; };
    DateTime.prototype.getYear = function () { return this.year; };
    DateTime.prototype.getTime = function () { return this.time; };
    return DateTime;
}());
exports.DateTime = DateTime;
