"use strict";
exports.__esModule = true;
exports.Room = exports.RoomStatus = void 0;
var RoomStatus;
(function (RoomStatus) {
    RoomStatus["SINGLE_ROOM"] = "single";
    RoomStatus["COUPLE_ROOM"] = "cuple";
    RoomStatus["FAMILY_ROOM"] = "family";
    RoomStatus["GREETING_ROOM"] = "getting";
    RoomStatus["SPECIAL_ROOM"] = "special";
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
        if (this.maxCapacity > this.tables.length) {
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
        var isTableFree = false;
        tables.forEach(function (table) {
            if (!table.hasCustomer()) {
                isTableFree = true;
            }
        });
        return isTableFree;
    };
    return Room;
}());
exports.Room = Room;
