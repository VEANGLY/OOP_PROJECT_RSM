import {StaffCategory, Staff} from './Staff'
import { Gender, Person } from "../Person";
export class Manager extends Staff{
    protected salary: number = 0;
    constructor(
        category: StaffCategory,
        name: string, age: number,
        gender: Gender,
        workTime: number,
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