import { OrderMenu } from "../../menu/OrderMenu";
import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff {
  constructor(category: StaffCategory, name: string, age: number, gender: Gender) {
    super(category, name, age, gender);
  }

  // setItems(newItems:OrderMenu){
  //   this.itemsOfOrder = newItems;
  // }

  // // private hasItem(){
  // //   return this.itemsOfOrder !== undefined;
  // // }

  // takeItemFromKitchenToTable(newItems:OrderMenu){
  //   this.itemsOfOrder = newItems;
  // }

  // takeItemFromTableToKitchen():OrderMenu{
  //     return this.itemsOfOrder;
  // }
}
