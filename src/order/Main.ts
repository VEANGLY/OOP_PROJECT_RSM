
import { OrderItem} from './OrderItem'
import { OrderMenu } from '../menu/OrderMenu'
import { Table } from '../room/Table'
import { Waiter } from '../human/staff/Waiter'
import {Person, Gender} from '../human/Person'
import { Staff, StaffCategory} from '../human/staff/Staff'
import { Menu, MenuCategory } from '../menu/Menu'
import {MenuItem, QuantityItem} from '../menu/MenuItem'
let order1 = new OrderItem();
let Hak = new Waiter(StaffCategory.WAITER, 'Hak', 33, Gender.MALE)
let Tim = new Waiter(StaffCategory.WAITER, 'Tim', 13, Gender.MALE)
let Nga = new Waiter(StaffCategory.WAITER, 'Nga', 13, Gender.MALE)
let tabllID1 = new Table(1, 2);

let Drink = new OrderMenu(1, MenuCategory.DRINK, 'CocaCola', 'Fresh', 3000,QuantityItem.SMALL)
let Food = new OrderMenu(1, MenuCategory.FOOD, 'Koko', 'Fresh', 90000,QuantityItem.MEDIUM)
let Dessert = new OrderMenu(1, MenuCategory.DESSERT, 'Banana', 'Fresh', 9000,QuantityItem.SMALL)
order1.addOrderMenu(Drink)
order1.addOrderMenu(Food)
order1.addOrderMenu(Dessert)

order1.setTableWhereCustomerSit(tabllID1);
order1.setTakeTheOrderToCashier(Hak);
console.log(order1);