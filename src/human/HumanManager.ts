
import { Staff } from "./staff/Staff";
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
}


