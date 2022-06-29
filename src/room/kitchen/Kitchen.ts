import { Waiter} from '../../human/staff/Waiter'
import { Chef, ChefStatus} from '../../human/staff/Chef'
import { OrderMenu } from '../../menu/OrderMenu'

export class Kitchen {
    private orderMenu: OrderMenu[] = [];
    private chelves: Chef[] = [];
    private takeItemFromKitchenToTable: Waiter;
    private takeItemFromTableToKitchen: Waiter;

//    getItems(){
//         return this.takeItemFromTableToKitchen.takeItemFromTableToKitchen();
//    }
    // addOrderItems(){
    //     this.orderMenu.push(this.getItems());
    // }

    addChefToKitchen(chef:Chef){
        this.chelves.push(chef);
    }

    /***
     * Find the chef who is currently free to take responsibility
     */
    getCooking(){
        this.orderMenu.forEach((item) => {
            this.chelves.forEach(chef =>{
                if(ChefStatus.COOKED == chef.chefStatusNow()){
                    chef.setFoodForChef(item);
                }else{
                    this.takeItemFromKitchenToTable.takeItemFromKitchenToTable(item);
                    chef.unSetFoodToChef(item)
                }
            })
        })
    }

}