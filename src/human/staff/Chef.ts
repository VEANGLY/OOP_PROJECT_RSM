
import { OrderMenu } from "../../menu/OrderMenu";
import { Gender, Person } from "../Person";
import { Staff, StaffCategory} from "./Staff";

export enum ChefStatus {
  COOKING, COOKED
}

export class Chef extends Staff {
  private foods?:OrderMenu;
  private chefStatus = ChefStatus.COOKED;
  constructor(category: StaffCategory, name: string, age: number, gender: Gender) {
    super(category, name, age, gender);
  }

  setFoodForChef(food: OrderMenu){
    this.foods = food;
  }

  private isChefFree(){
    return this.foods !== undefined
  }

  chefStatusNow(){
    if(this.isChefFree()){
       return this.chefStatus = ChefStatus.COOKING;
    }else{
      return this.chefStatus  = ChefStatus.COOKED
    }
  }

  unSetFoodToChef(food: OrderMenu){
   return this.foods = undefined;
  }

}