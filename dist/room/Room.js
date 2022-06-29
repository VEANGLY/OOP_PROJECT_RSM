"use strict";
exports.__esModule = true;
exports.Room = exports.RoomStatus = void 0;
var RoomStatus;
(function (RoomStatus) {
    RoomStatus[RoomStatus["SINGLE_ROOM"] = 0] = "SINGLE_ROOM";
    RoomStatus[RoomStatus["COUPLE_ROOM"] = 1] = "COUPLE_ROOM";
    RoomStatus[RoomStatus["FAMILY_ROOM"] = 2] = "FAMILY_ROOM";
    RoomStatus[RoomStatus["GREETING_ROOM"] = 3] = "GREETING_ROOM";
    RoomStatus[RoomStatus["SPECIAL_ROOM"] = 4] = "SPECIAL_ROOM";
})(RoomStatus = exports.RoomStatus || (exports.RoomStatus = {}));
var Room = /** @class */ (function () {
    function Room(roomId, status, maxCapacity) {
        this.roomId = roomId;
        this.status = status;
        this.maxCapacity = maxCapacity;
        this.tables = [];
    }
    /**
     *
     * @param table add table to the room.
     */
    Room.prototype.addTable = function (table) {
        if (this.isRoomFree()) {
            this.tables.push(table);
        }
    };
    /**
     *
     * @returns get all tables in the room
     */
    Room.prototype.getTable = function () {
        return this.tables;
    };
    /**
     *
     * @returns true is room is free
     */
    Room.prototype.isRoomFree = function () {
        var tables = this.getTable();
        tables.forEach(function (table) {
            if (!table.hasCustomer()) {
                return true;
            }
        });
        return false;
    };
    return Room;
}());
exports.Room = Room;
