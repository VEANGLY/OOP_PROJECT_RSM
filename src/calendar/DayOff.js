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
exports.DayOff = void 0;
var DateTime_1 = require("./DateTime");
var Event_1 = require("./Event");
var DayOff = /** @class */ (function (_super) {
    __extends(DayOff, _super);
    function DayOff(category, start, end, dayOff, promotion) {
        if (dayOff === void 0) { dayOff = false; }
        if (promotion === void 0) { promotion = false; }
        var _this = _super.call(this, category, start, end) || this;
        _this.dayOff = dayOff;
        _this.promotion = promotion;
        return _this;
    }
    DayOff.prototype.getDayOff = function () {
        return (this.dayOff &&
            this.promotion &&
            this.category !== Event_1.EventCategory.REGULARLY);
    };
    return DayOff;
}(Event_1.Event));
exports.DayOff = DayOff;
var start = new DateTime_1.DateTime(13, 4, 2022, 10);
var end = new DateTime_1.DateTime(18, 4, 2022, 10);
var day = new DayOff(Event_1.EventCategory.FESTIVAL, start, end, true, true);
console.log(day.getDayOff());
