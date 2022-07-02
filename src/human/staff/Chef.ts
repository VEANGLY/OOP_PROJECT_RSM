
import { OrderMenu } from "../../menu/OrderMenu";
import { OrderItem } from "../../order/OrderItem";
import { Gender, Person } from "../Person";
import { Staff, StaffCategory} from "./Staff";
import { Waiter } from "./Waiter";
import { Menu, MenuCategory} from "../../menu/Menu";
export class Chef extends Staff {
  private listMenu:OrderMenu[] = [];
  private waiterTakeItemsToCustomer :Waiter;
  constructor(
    category: StaffCategory,
    name: string, age: number,
    gender: Gender,
    ) {
    super(category, name, age, gender);
  }

  addMenu(menu:OrderItem) {
    this.listMenu = menu.getOrderItem();
  }
  getMenu(){
    return this.listMenu;
  }

  chefWillDo():string{
    let cook = false;  //Defual
    let prepare =false;  //Defual
    this.getMenu().forEach(menu =>{
      if(menu.getMenuType() === MenuCategory.FOOD){
          cook = true;
      }else{
        prepare = true;
      }
    })
    if(prepare && cook){
      return "Chef must to cook and prepare"
    }else if(!prepare && cook){
      return 'Chef must to cook';
    }else if(prepare && !cook){
      return 'Chef must to prepare Only';
    }else{
      return 'Doing nothing';
    }
  }

  setWaitToTaktheItem(waiter:Waiter){
      this.waiterTakeItemsToCustomer = waiter;
  }
}