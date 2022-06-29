
import { Gender, Person } from "../Person";
import { Staff, StaffCategory} from "./Staff";

/**
 * A doctor is a staff with a mediacal speciality
 */
export class Cashier extends Staff {
  constructor(category: StaffCategory,
    name: string,
    age: number, 
    gender: Gender,
    workTime: number
    ) {
    super(category, name, age, gender, workTime);
  }

  setSalary(salary: number) {
    this.salary = salary + 20000*(this.workTime-8);
  }

  getSalary() {
    return this.salary;
  }
}
