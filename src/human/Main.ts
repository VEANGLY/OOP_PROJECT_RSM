import {Cashier} from './staff/Cashier';
import { Chef } from './staff/Chef';
import { Waiter} from './staff/Waiter';
import { Person , Gender} from './Person';
import {Manager} from './staff/Manager';
import {Staff, StaffCategory} from './staff/Staff';
import { HumanManager } from './HumanManager';

let human = new HumanManager()
let chef = new Chef(StaffCategory.CHEF, 'Rasmey',23, Gender.FEMALE);
let waiter = new Waiter(StaffCategory.WAITER, 'Ronan',33, Gender.MALE);
let manager = new Manager(StaffCategory.MANAGER, 'Him',53, Gender.MALE);
let cashier = new Cashier(StaffCategory.CASHEIR, 'Him',18, Gender.MALE);
chef.setSalary(500);
chef.setTotalHoursPerMonth(100)
manager.setSalary(2500);
manager.setTotalHoursPerMonth(90)
cashier.setSalary(800);
cashier.setTotalHoursPerMonth(95)
waiter.setSalary(500);
waiter.setTotalHoursPerMonth(120)
human.addStaff(chef);
human.addStaff(manager);
human.addStaff(cashier);
human.addStaff(waiter);
human.setetSalaryToStaff()
// console.log(human)
console.log('The chef salary is: '+chef.getSalary());
console.log('The Manager salary is: '+manager.getSalary());
console.log('The Cashier salary is: '+cashier.getSalary());
console.log('The waiter salary is: '+waiter.getSalary());
