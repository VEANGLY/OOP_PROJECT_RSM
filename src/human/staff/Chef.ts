
import { OrderMenu } from "../../menu/OrderMenu";
import { Gender, Person } from "../Person";
import { Staff, StaffCategory} from "./Staff";

export enum ChefStatus {
  COOKING, COOKED
}
export class Chef extends Staff {
  protected salary: number = 0;
  constructor(
    category: StaffCategory,
    name: string, age: number,
    gender: Gender,
    workTime: number
    ) {
    super(category, name, age, gender, workTime);
  }
  setSalary(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}