import {Waiter} from '../human/staff/Waiter'
import { MenuManager } from '../menu/MenuManager';
import { OrderMenu } from '../menu/OrderMenu';
import {Table} from '../room/Table'
export class OrderItem {
    private takeTheOrderToCashier: Waiter;
    private tableWhereCustomerSit:Table;
    private orderItems: OrderMenu[] = [];
    /**
     * 
     * @param takeTheOrderToCashier set waiter to customer
     */
     setTakeTheOrderToCashier(waiter: Waiter){
      this.takeTheOrderToCashier = waiter
    }
    getTakeTheOrderToCashier(){
      return this.takeTheOrderToCashier;
    }
    addOrderMenu(order: MenuManager){
      this.orderItems = order.getListOrderMenu()
    }

    setTableWhereCustomerSit(table: Table){
      this.tableWhereCustomerSit = table
    }
    getTableWhereCustomerSit(){
      return this.tableWhereCustomerSit;
    }
    
    getOrderItem(){
      return this.orderItems;
    }
}
