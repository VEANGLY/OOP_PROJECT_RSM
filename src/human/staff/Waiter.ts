
import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";
export class Waiter extends Staff {
  protected salary: number = 0;
  constructor(
    category: StaffCategory, 
    name: string, 
    age: number, 
    gender: Gender,
    workTime: number
  ) 
  {
    super(category, name, age, gender,workTime);
  }
  setSalary(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

