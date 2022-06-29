"use strict";
exports.__esModule = true;
exports.Event = exports.EventCategory = void 0;
var EventCategory;
(function (EventCategory) {
    EventCategory["WEEKEND"] = "WEEKEND";
    EventCategory["FESTIVAL"] = "FASTIVAL";
    EventCategory["SPECIAL"] = "SPECIAL DAY";
    EventCategory["REGULARLY"] = "NORMAL DAY";
})(EventCategory = exports.EventCategory || (exports.EventCategory = {}));
var Event = /** @class */ (function () {
    function Event(category, start, end) {
        this.category = category;
        this.start = start;
        this.end = end;
    }
    return Event;
}());
exports.Event = Event;
