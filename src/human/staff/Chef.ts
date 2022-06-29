
import { Gender, Person } from "../Person";
import { Staff, StaffCategory} from "./Staff";

export class Chef extends Staff {
  constructor(
    category: StaffCategory,
    name: string, age: number,
    gender: Gender,
    ) {
    super(category, name, age, gender);
  }

}