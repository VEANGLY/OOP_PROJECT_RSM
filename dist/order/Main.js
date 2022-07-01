"use strict";
exports.__esModule = true;
var OrderItem_1 = require("./OrderItem");
var OrderMenu_1 = require("../menu/OrderMenu");
var Table_1 = require("../room/Table");
var Waiter_1 = require("../human/staff/Waiter");
var Person_1 = require("../human/Person");
var Staff_1 = require("../human/staff/Staff");
var Menu_1 = require("../menu/Menu");
var MenuItem_1 = require("../menu/MenuItem");
var OrderManager_1 = require("./OrderManager");
var orderManager = new OrderManager_1.OrderManagmer();
var order1 = new OrderItem_1.OrderItem();
var order2 = new OrderItem_1.OrderItem();
var Hak = new Waiter_1.Waiter(Staff_1.StaffCategory.WAITER, 'Hak', 33, Person_1.Gender.MALE);
var tabllID1 = new Table_1.Table(1, 2);
var tabllID2 = new Table_1.Table(2, 2);
var Drink = new OrderMenu_1.OrderMenu(1, Menu_1.MenuCategory.DRINK, 'CocaCola', 'Fresh', 3000, MenuItem_1.QuantityItem.SMALL);
var Food = new OrderMenu_1.OrderMenu(1, Menu_1.MenuCategory.FOOD, 'Koko', 'Fresh', 90000, MenuItem_1.QuantityItem.MEDIUM);
var Dessert = new OrderMenu_1.OrderMenu(1, Menu_1.MenuCategory.DESSERT, 'Banana', 'Fresh', 9000, MenuItem_1.QuantityItem.SMALL);
order1.addOrderMenu(Drink);
order1.addOrderMenu(Food);
order1.addOrderMenu(Dessert);
order1.setTableWhereCustomerSit(tabllID1);
order1.setTakeTheOrderToCashier(Hak);
orderManager.addOrderMenuToListOrder(order1);
order2.addOrderMenu(Drink);
order2.addOrderMenu(Food);
order2.addOrderMenu(Dessert);
order2.setTableWhereCustomerSit(tabllID1);
order2.setTakeTheOrderToCashier(Hak);
orderManager.addOrderMenuToListOrder(order2);
console.log(orderManager.getListOrderMenu()[0].getOrderItem());
