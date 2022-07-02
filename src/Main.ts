import { Restaurant } from './Restaurant';
// MENU MANAGMENT
import { OrderMenu } from './menu/OrderMenu';
import { Menu, MenuCategory } from './menu/Menu';
import { MenuItem , QuantityItem } from './menu/MenuItem';
// ALL EVENT IN RESTAURANT
import { DayOff } from './calendar/DayOff';
import { CalendarManager } from "./calendar/CalendarManager";
import { DateTime } from "./calendar/DateTime";
import { Event, EventCategory } from "./calendar/Event";
// HUMAN MANAGMENT
import { Customer, CustomerStatus} from './human/customer/Customer';
import { Person, Gender } from './human/Person'
import { Staff, StaffCategory } from './human/staff/Staff';
import { Waiter } from './human/staff/Waiter';
import { Cashier } from './human/staff/Cashier';
import { Chef } from './human/staff/Chef';
import { Manager } from './human/staff/Manager';
// ORDER MANAGMENT
import { OrderItem } from './order/OrderItem';
// import { OrderManager } from './order/OrderManager';
// ROOM MANAGMENT
import { Room, RoomStatus, } from './room/Room';
import { Table } from './room/Table';
//.....My Seaul Restaurant...................
let Seaul = new Restaurant('Seaul', "PP");
//...............HUMAN........................
let customer1 = new Customer(CustomerStatus.WAITING);
let customer2 = new Customer(CustomerStatus.WAITING);
let customer3 = new Customer(CustomerStatus.WAITING);
let customer4 = new Customer(CustomerStatus.WAITING);
let Rasmey = new Chef(StaffCategory.CHEF, 'Rasmey',23, Gender.FEMALE);
let Him = new Manager(StaffCategory.MANAGER, 'Him',53, Gender.MALE);
let Ronan = new Waiter(StaffCategory.WAITER, 'Ronan',33, Gender.MALE);
let Rady = new Cashier(StaffCategory.CASHEIR, 'Rady',18, Gender.MALE);
Rasmey.setSalary(500);
Rasmey.setTotalHoursPerMonth(100);
Him.setSalary(2500);
Him.setTotalHoursPerMonth(90);
Ronan.setSalary(800);
Ronan.setTotalHoursPerMonth(95);
Rady.setSalary(500);
Rady.setTotalHoursPerMonth(120);

Seaul.hr.addStaff(Rasmey);
Seaul.hr.addStaff(Him);
Seaul.hr.addStaff(Ronan);
Seaul.hr.addStaff(Rady);
Seaul.hr.setetSalaryToStaff(); // Use to set salary for staff who have extraTime
// console.log(Seaul.hr);
// console.log('The chef salary is: '+ Rasmey.getSalary());
// console.log('The Manager salary is: '+ Him.getSalary());
// console.log('The Cashier salary is: '+ Ronan.getSalary());
// console.log('The waiter salary is: '+ Rady.getSalary());
//...............Calendar.......................
let start = new DateTime(13, 4, 2022,10);
let end = new DateTime(15, 4, 2022,8);
let KhmerNewYear = new DayOff(EventCategory.FESTIVAL, start, end, true, true)
//................Menu...........................
let Drink = new OrderMenu(1, MenuCategory.DRINK, 'CocaCola', 'Fresh', 3000,QuantityItem.SMALL);
let Food = new OrderMenu(2, MenuCategory.FOOD, 'Koko', 'Fresh', 90000, QuantityItem.MEDIUM);
let Dessert = new OrderMenu(3, MenuCategory.DESSERT, 'Banana', 'Fresh', 9000,QuantityItem.SMALL);
Seaul.menu.addOrderItems(Drink, Food, Dessert);
// console.log(Seaul.menu.getListOrderMenu())
Seaul.menu.setDayOff(KhmerNewYear);//Set the day is off day.
Seaul.menu.setPriceOff(20); // Set the percentage of the price off
Seaul.menu.setPriceOffAllMenu(); // Set all product is off
// console.log(Seaul.menu.getListOrderMenu());

//.............Room................................
let table1 = new Table(1, 4);
let table2 = new Table(2, 4);
let table3 = new Table(3, 4);
let table4 = new Table(4, 5);

let Room1 = new Room(1,RoomStatus.GREETING_ROOM,6);
let Room2 = new Room(2,RoomStatus.COUPLE_ROOM,6);
let Room3 = new Room(2,RoomStatus.FAMILY_ROOM,6);

Room1.addTable(table1); Room1.addTable(table2);
Room1.addTable(table3); Room1.addTable(table4);

Room2.addTable(table1); Room2.addTable(table2);
Room2.addTable(table3); Room2.addTable(table4);

Room3.addTable(table1); Room3.addTable(table2);
Room3.addTable(table3); Room3.addTable(table4);

table1.addCustomer(customer1); table1.addCustomer(customer2); 
table1.addCustomer(customer3); table1.addCustomer(customer4); 

table2.addCustomer(customer1); table2.addCustomer(customer2); 
table2.addCustomer(customer3); table2.addCustomer(customer4); 

table3.addCustomer(customer1); table3.addCustomer(customer2); 
table3.addCustomer(customer3); table3.addCustomer(customer4); 

table4.addCustomer(customer1); table4.addCustomer(customer2); 
table4.addCustomer(customer3); table4.addCustomer(customer4); 

// console.log(table1.numberOfCustomerOnTable());//Find the number of customers on the table
table1.setCustomerIDToTableID();//Set all customersId as table they are on
// console.log(table1.getCustomer());//Get the customers
// console.log(Room1.isRoomFree());//Set table is free
// console.log(Room1.getTable());//Get all tables
Seaul.rooms.addRoom(Room1);
Seaul.rooms.addRoom(Room2);
Seaul.rooms.addRoom(Room3);
// console.log(Seaul.rooms.getFreeRooms());
// console.log(Seaul.rooms.getAllRooms());
console.log(Seaul.rooms.getTotalOfCutomer());
//..............Order...............................
let myOrder = new OrderItem();
myOrder.addOrderMenu(Seaul.menu)//add menu to order
myOrder.setTableWhereCustomerSit(table1);// Set Table with with into menu
myOrder.setTakeTheOrderToCashier(Ronan);//Set Waiter to responsible in each menu
// console.log(myOrder.getOrderItem());//list order menu
Seaul.Order.addOrderMenuToListOrder(myOrder);// Add to list Order menu
// console.log(Seaul.Order.getListOrderMenu())//Display list of order

//...............PAYMENT................................
Rady.setListorder(Seaul.Order);
let dateOfEating = new DateTime(30,6,2022,9);//Date of customer join the Restaurant
Rady.setDateTime(dateOfEating);
// console.log(Rady.printBillingForCutomer());//Run the for print the reciept


