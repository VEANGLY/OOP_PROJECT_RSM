import { Gender, Person } from "../Person";

export enum StaffCategory {
  MANAGER= 'Manager',
  WAITER = "Waiter",
  CASHEIR = "Casheir",
  SECURITY_G = "Security guard",
  CLEANER = "Cleaner",
  CHEF = 'Chef'
}

/**
 * A staff is a personn of the hospital with a salary
 */
export class Staff extends Person {
  protected salary: number = 0; // by default
  protected totalHoursPerMonth: number = 0; // by default
  protected mainoHursPerMonth: number = 80; // by default
  constructor(
    protected category: StaffCategory,
    name: string,
    age: number,
    gender: Gender,
    
  ) {
    super(name, age, gender);
  }

  setSalary(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getStaffCategory(){
    return this.category
  }

  setTotalHoursPerMonth(totalh: number){
    this.totalHoursPerMonth = totalh;
  }
  geTotalHoursPerMonth() {
    return this.totalHoursPerMonth;
  }
  
  getMainoHursPerMonth() {
    return this.mainoHursPerMonth;
  }
}
