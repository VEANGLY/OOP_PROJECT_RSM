
import { Staff, StaffCategory} from "./staff/Staff";
export class HumanManager {
  private staffs: Staff[] = [];
  
  getdPatients() {
  }

  addStaff(staff: Staff) {
    this.staffs.push(staff);
  }

  getStaffs() {
    return this.staffs;
  }
  /**
   * Set the salary of the staff if prefer to work overtime
   */
  setetSalaryToStaff(){
    let staffs = this.getStaffs();
    staffs.forEach(staff =>{
      if(staff.getStaffCategory() === StaffCategory.MANAGER){
        staff.setSalary(staff.getSalary() + 20*(staff.geTotalHoursPerMonth()-staff.getMainoHursPerMonth()))
      }
      else if(staff.getStaffCategory() === StaffCategory.CHEF){
        staff.setSalary(staff.getSalary() + 10*(staff.geTotalHoursPerMonth()-staff.getMainoHursPerMonth()))
      }
      else if(staff.getStaffCategory() === StaffCategory.WAITER){
        staff.setSalary(staff.getSalary() + 5*(staff.geTotalHoursPerMonth()-staff.getMainoHursPerMonth()))
      }
      else if(staff.getStaffCategory() === StaffCategory.CASHEIR){
        staff.setSalary(staff.getSalary() + 5*(staff.geTotalHoursPerMonth()-staff.getMainoHursPerMonth()))
      }
    })
  }
}


