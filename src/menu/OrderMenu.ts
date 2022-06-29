import {QuantityItem} from "./MenuItem";
import { Menu, MenuCategory} from "./Menu";
export class OrderMenu extends Menu {
    constructor(
        private id: number, 
        typemenu:MenuCategory,
        title: string,
        description: string,
        price:number,dish:QuantityItem)

    {super(typemenu, title, description, price, dish)}
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