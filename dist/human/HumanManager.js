"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var Staff_1 = require("./staff/Staff");
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.staffs = [];
    }
    HumanManager.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    HumanManager.prototype.getStaffs = function () {
        return this.staffs;
    };
    /**
     * Set the salary of the staff if prefer to work overtime
     * Note: the number is extra money per hour
     */
    HumanManager.prototype.setetSalaryToStaff = function () {
        var staffs = this.getStaffs();
        staffs.forEach(function (staff) {
            if (staff.getStaffCategory() === Staff_1.StaffCategory.MANAGER) {
                staff.setSalary(staff.getSalary() + 20 * (staff.geTotalHoursPerMonth() - staff.getMainoHursPerMonth()));
            }
            else if (staff.getStaffCategory() === Staff_1.StaffCategory.CHEF) {
                staff.setSalary(staff.getSalary() + 10 * (staff.geTotalHoursPerMonth() - staff.getMainoHursPerMonth()));
            }
            else if (staff.getStaffCategory() === Staff_1.StaffCategory.WAITER) {
                staff.setSalary(staff.getSalary() + 5 * (staff.geTotalHoursPerMonth() - staff.getMainoHursPerMonth()));
            }
            else if (staff.getStaffCategory() === Staff_1.StaffCategory.CASHEIR) {
                staff.setSalary(staff.getSalary() + 5 * (staff.geTotalHoursPerMonth() - staff.getMainoHursPerMonth()));
            }
        });
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
