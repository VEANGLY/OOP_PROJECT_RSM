import {Waiter} from '../human/staff/Waiter'
import {Cashier} from '../human/staff/Cashier'
import { OrderMenu } from '../menu/OrderMenu';
import {Table} from '../room/Table'
export class OrderItem {
    private waiter?: Waiter;
    private cashier?: Cashier;
    private table?:Table;
    private orderItem: OrderMenu;

    /**
     * 
     * @param waiter set waiter to customer
     */
    setWaiter(waiter: Waiter){
      this.waiter = waiter
    }
    /**
     * 
     * @returns 
     */
    hasWaiter(): Waiter |undefined{
      return this.waiter
    }

    /**
     * get cashier to customer
     */
    setCashier(cashier: Cashier){
      this.cashier = cashier
    }

    hasCashier(): Waiter |undefined{
      return this.waiter
    }
    
    setOrderItem(orderItem: OrderMenu){
      this.orderItem = orderItem;
    }
    setTableID(newTable: Table){
      this.table = newTable;
    }
}
