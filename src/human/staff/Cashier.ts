
import { Gender, Person } from "../Person";
import { Staff, StaffCategory} from "./Staff";
import { OrderManager } from "../../order/OrderManager";
import { OrderItem } from "../../order/OrderItem";
import { DateTime} from "../../calendar/DateTime";
export class Cashier extends Staff {
  private listOrders:OrderItem[] = [];
  private date:DateTime;
  constructor(category: StaffCategory,
    name: string,
    age: number, 
    gender: Gender,
    ) {
    super(category, name, age, gender);
  }
  
  setListorder(listOrder:OrderManager){
    this.listOrders = listOrder.getListOrderMenu();
  }

  getListorder(){
    return this.listOrders;
  }
/**
 * Print the payment to customer
 */
  printBillingForCutomer(){
    this.getListorder().forEach(listOrder =>{
      let totalPrice = 0; //defualt
      console.log('- Table_ID: '+ listOrder.getTableWhereCustomerSit().getTableId());
      console.log('- Waiter_Name: '+ listOrder.getTakeTheOrderToCashier().getStaffName());
      listOrder.getOrderItem().forEach(orderItem =>{
        totalPrice += orderItem.getPrice();
        console.log('- Food_Name: '+ orderItem.getFoodName()+" and price is: "+ orderItem.getPrice()+"$");
        console.log('- Quantity order: '+ orderItem.getQuantity())
      })
      console.log('- Total: '+totalPrice+"$");
      console.log('- Cashier_Name: '+this.name);
      console.log('- Date: '+ this.date.getDay()+', '+ this.date.getMonth()+', '+this.date.getYear()+', '+ this.date.getTime())
    })
  }
  setDateTime(datetime:DateTime) {
    return this.date = datetime;
  }
}
