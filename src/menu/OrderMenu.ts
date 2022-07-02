import {QuantityItem} from "./MenuItem";
import { Menu, MenuCategory} from "./Menu";
export class OrderMenu extends Menu {
    constructor(
        private id: number, 
        typemenu:MenuCategory,
        title: string,
        description: string,
        price:number,
        quantity:QuantityItem)
    {super(typemenu, title, description, price, quantity)}

}