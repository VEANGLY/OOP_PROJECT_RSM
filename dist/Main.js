"use strict";
exports.__esModule = true;
var Restaurant_1 = require("./Restaurant");
// MENU MANAGMENT
var OrderMenu_1 = require("./menu/OrderMenu");
var Menu_1 = require("./menu/Menu");
var MenuItem_1 = require("./menu/MenuItem");
// ALL EVENT IN RESTAURANT
var DayOff_1 = require("./calendar/DayOff");
var DateTime_1 = require("./calendar/DateTime");
var Event_1 = require("./calendar/Event");
// HUMAN MANAGMENT
var Customer_1 = require("./human/customer/Customer");
var Person_1 = require("./human/Person");
var Staff_1 = require("./human/staff/Staff");
var Waiter_1 = require("./human/staff/Waiter");
var Cashier_1 = require("./human/staff/Cashier");
var Chef_1 = require("./human/staff/Chef");
var Manager_1 = require("./human/staff/Manager");
// ORDER MANAGMENT
var OrderItem_1 = require("./order/OrderItem");
// import { OrderManager } from './order/OrderManager';
// ROOM MANAGMENT
var Room_1 = require("./room/Room");
var Table_1 = require("./room/Table");
//.....My Seaul Restaurant...................
var Seaul = new Restaurant_1.Restaurant('Seaul', "PP");
//...............HUMAN........................
var customer1 = new Customer_1.Customer(Customer_1.CustomerStatus.WAITING);
var customer2 = new Customer_1.Customer(Customer_1.CustomerStatus.WAITING);
var customer3 = new Customer_1.Customer(Customer_1.CustomerStatus.WAITING);
var customer4 = new Customer_1.Customer(Customer_1.CustomerStatus.WAITING);
var Rasmey = new Chef_1.Chef(Staff_1.StaffCategory.CHEF, 'Rasmey', 23, Person_1.Gender.FEMALE);
var Him = new Manager_1.Manager(Staff_1.StaffCategory.MANAGER, 'Him', 53, Person_1.Gender.MALE);
var Ronan = new Waiter_1.Waiter(Staff_1.StaffCategory.WAITER, 'Ronan', 33, Person_1.Gender.MALE);
var Rady = new Cashier_1.Cashier(Staff_1.StaffCategory.CASHEIR, 'Rady', 18, Person_1.Gender.MALE);
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
var start = new DateTime_1.DateTime(13, 4, 2022, 10);
var end = new DateTime_1.DateTime(15, 4, 2022, 8);
var KhmerNewYear = new DayOff_1.DayOff(Event_1.EventCategory.FESTIVAL, start, end, true, true);
//................Menu...........................
var Drink = new OrderMenu_1.OrderMenu(1, Menu_1.MenuCategory.DRINK, 'CocaCola', 'Fresh', 3000, MenuItem_1.QuantityItem.SMALL);
var Food = new OrderMenu_1.OrderMenu(2, Menu_1.MenuCategory.FOOD, 'Koko', 'Fresh', 90000, MenuItem_1.QuantityItem.MEDIUM);
var Dessert = new OrderMenu_1.OrderMenu(3, Menu_1.MenuCategory.DESSERT, 'Banana', 'Fresh', 9000, MenuItem_1.QuantityItem.SMALL);
Seaul.menu.addOrderItems(Drink, Food, Dessert);
// console.log(Seaul.menu.getListOrderMenu())
Seaul.menu.setDayOff(KhmerNewYear); //Set the day is off day.
Seaul.menu.setPriceOff(20); // Set the percentage of the price off
Seaul.menu.setPriceOffAllMenu(); // Set all product is off
// console.log(Seaul.menu.getListOrderMenu());
//.............Room................................
var table1 = new Table_1.Table(1, 4);
var table2 = new Table_1.Table(2, 4);
var table3 = new Table_1.Table(3, 4);
var table4 = new Table_1.Table(4, 5);
var Room1 = new Room_1.Room(1, Room_1.RoomStatus.GREETING_ROOM, 6);
var Room2 = new Room_1.Room(2, Room_1.RoomStatus.COUPLE_ROOM, 6);
var Room3 = new Room_1.Room(2, Room_1.RoomStatus.FAMILY_ROOM, 6);
Room1.addTable(table1);
Room1.addTable(table2);
Room1.addTable(table3);
Room1.addTable(table4);
Room2.addTable(table1);
Room2.addTable(table2);
Room2.addTable(table3);
Room2.addTable(table4);
Room3.addTable(table1);
Room3.addTable(table2);
Room3.addTable(table3);
Room3.addTable(table4);
table1.addCustomer(customer1);
table1.addCustomer(customer2);
table1.addCustomer(customer3);
table1.addCustomer(customer4);
table2.addCustomer(customer1);
table2.addCustomer(customer2);
table2.addCustomer(customer3);
table2.addCustomer(customer4);
table3.addCustomer(customer1);
table3.addCustomer(customer2);
table3.addCustomer(customer3);
table3.addCustomer(customer4);
table4.addCustomer(customer1);
table4.addCustomer(customer2);
table4.addCustomer(customer3);
table4.addCustomer(customer4);
// console.log(table1.numberOfCustomerOnTable());//Find the number of customers on the table
table1.setCustomerIDToTableID(); //Set all customersId as table they are on
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
var myOrder = new OrderItem_1.OrderItem();
myOrder.addOrderMenu(Seaul.menu); //add menu to order
myOrder.setTableWhereCustomerSit(table1); // Set Table with with into menu
myOrder.setTakeTheOrderToCashier(Ronan); //Set Waiter to responsible in each menu
// console.log(myOrder.getOrderItem());//list order menu
Seaul.Order.addOrderMenuToListOrder(myOrder); // Add to list Order menu
// console.log(Seaul.Order.getListOrderMenu())//Display list of order
//...............PAYMENT................................
Rady.setListorder(Seaul.Order);
var dateOfEating = new DateTime_1.DateTime(30, 6, 2022, 9); //Date of customer join the Restaurant
Rady.setDateTime(dateOfEating);
// console.log(Rady.printBillingForCutomer());//Run the for print the reciept
