import {Waiter} from '../human/staff/Waiter'
import {Cashier} from '../human/staff/Cashier'
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
  
    addOrderMenu(order: OrderMenu){
      this.orderItems.push(order);
    }

    setTableWhereCustomerSit(table: Table){
      this.tableWhereCustomerSit = table
    }
    

    getOrderItem(){
      return this.orderItems;
    }
}
