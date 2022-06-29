
import { Gender, Person } from "../Person";
import { Staff, StaffCategory} from "./Staff";
export class Cashier extends Staff {
  constructor(category: StaffCategory,
    name: string,
    age: number, 
    gender: Gender,
    ) {
    super(category, name, age, gender);
  }
 
  printCheckOfcustomers(){

  }
}
