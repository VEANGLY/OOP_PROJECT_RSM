"use strict";
exports.__esModule = true;
exports.RoomsManager = void 0;
var RoomsManager = /** @class */ (function () {
    function RoomsManager() {
        this.rooms = [];
    }
    /**
     *
     * @returns all number of rooms
     */
    RoomsManager.prototype.getNumberOfRooms = function () {
        return this.rooms.length;
    };
    /**
     *
     * @param room Add to the Resturant
     */
    RoomsManager.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    /**
     * return the free rooms
     */
    RoomsManager.prototype.getFreeRooms = function () {
        var listFreeRooms = [];
        this.rooms.forEach(function (room) {
            if (!room.isRoomFree()) {
                listFreeRooms.push(room);
            }
        });
        if (listFreeRooms.length > 0) {
            return listFreeRooms;
        }
        else {
            return undefined;
        }
    };
    RoomsManager.prototype.getAllRooms = function () {
        return this.rooms;
    };
    RoomsManager.prototype.getTotalOfCutomer = function () {
        var allNumberOffCustomer = 0; //Defualt
        var temperaryTables = [];
        this.getAllRooms().forEach(function (room) {
            room.getTable().forEach(function (table) {
                allNumberOffCustomer += table.numberOfCustomerOnTable();
            });
        });
        return allNumberOffCustomer;
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;
