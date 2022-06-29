"use strict";
exports.__esModule = true;
var DayOff_1 = require("./calendar/DayOff");
var Event_1 = require("./calendar/Event");
var DateTime_1 = require("./calendar/DateTime");
var start = new DateTime_1.DateTime(13, 4, 2022, 10);
var end = new DateTime_1.DateTime(18, 4, 2022, 10);
var day = new DayOff_1.DayOff(Event_1.EventCategory.FESTIVAL, start, end, true, false);
console.log(day.getDayOff());
