import { Waiter} from '../../human/staff/Waiter'
import { Chef} from '../../human/staff/Chef'
import { OrderItem } from '../../order/OrderItem';
import { OrderManager } from '../../order/OrderManager';

export class Kitchen {
    private listOrders:OrderItem[] = [];
    private cookers: Chef[] = [];

    addChefToKitchen(chef:Chef){
        this.cookers.push(chef);
    }

    getChef(){
        return this.cookers
    }

    addOrderItemsToKitchen(orderItems:OrderManager){
        this.listOrders = orderItems.getListOrderMenu();
    }

    getListOrderMenuOfKitchen(){
        return this.listOrders
    }

    getToCookOrPrepare(){
        for(var i = 0; i < this.isChefEqualToMenu(); i++)
        {
            this.getChef()[i].addMenu(this.getListOrderMenuOfKitchen()[i])
        }
    }

    isChefFree(){
        return this.getChef().length > this.getListOrderMenuOfKitchen().length;
    }

    isMenuFree(){
        return this.getChef().length < this.getListOrderMenuOfKitchen().length;
    }

    isChefEqualToMenu(): number{
        if(this.isChefFree()){
            return this.getChef().length 
        }else{
            return this.getListOrderMenuOfKitchen().length
        }
    }

    isKitchenFree(){
       return (0 <this.getChef().length && 0 < this.getListOrderMenuOfKitchen().length)
    }
}