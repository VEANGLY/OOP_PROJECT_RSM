import { MenuItem, QuantityItem} from "./MenuItem";

export enum MenuCategory {
    DRINK= 'Drink',
     FOOD= 'Food', 
     DESSERT = 'Dessert', 
     ICECREAM= 'Ice Cream',
      SNACK = 'Snack'
}
export class Menu extends MenuItem {
    constructor(
        private typemenu:MenuCategory,
        title: string,
        description: string,
        price:number,dish:QuantityItem
    )
    {super(title, description, price, dish)}

    /**
     * 
     * @param number Return update price
     */
    updatePrice(price:number){
        this.price = price;
    }
    getPrice():number {
        return this.price
    };
}