import {Waiter} from '../human/staff/Waiter'
import {Cashier} from '../human/staff/Cashier'
import { OrderMenu } from '../menu/OrderMenu';
import {Table} from '../room/Table'
import { OrderItem } from './OrderItem';

export class OrderManagmer {
    private listOrerMenu: OrderItem[] = [];
    

    addOrderMenuToListOrder(order: OrderItem){
        this.listOrerMenu.push(order);
    }

    getListOrerMenu(){
        return this.listOrerMenu;
    }
}
