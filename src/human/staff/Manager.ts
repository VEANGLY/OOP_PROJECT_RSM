import {StaffCategory, Staff} from './Staff'
import { Gender, Person } from "../Person";
export class Manager extends Staff{
    constructor(
        category: StaffCategory,
        name: string, age: number,
        gender: Gender,
    ) 
    {
        super(category, name, age, gender);
    }
}