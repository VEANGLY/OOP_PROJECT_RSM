"use strict";
exports.__esModule = true;
exports.CalendarManager = void 0;
var CalendarManager = /** @class */ (function () {
    function CalendarManager() {
        this.events = [];
    }
    CalendarManager.prototype.addEvent = function (event) {
        this.events.push(event);
    };
    CalendarManager.prototype.getAmountOfDayOff = function () {
        return this.events.length;
    };
    return CalendarManager;
}());
exports.CalendarManager = CalendarManager;
