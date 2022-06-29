import {OrderMenu} from './OrderMenu'
import { MenuItem } from './MenuItem'
import {DayOff} from '../calendar/DayOff'
export class MenuManager {
    private priceOff = 0;//default
    private dayOff:DayOff;
    private listOrerMenu:OrderMenu[] = [];

    setPrice(price: number) {
        this.priceOff = price;
    }

    private getPriceOff(): number {
        return this.priceOff;
    }
    
    /**
     * Set the price all the items item
     */
    setPriceOff(daysOff: DayOff){
        if(this.dayOff.getDayOff(daysOff))
        this.listOrerMenu.forEach((item: OrderMenu) =>{
            item.updatePrice(item.getPrice()*this.getPriceOff()/100) ;
        })
    }
    /**
     * 
     * @param orderItem add to list customer who order
     */
    addOrderItems(...orderItem: OrderMenu[]){
        this.listOrerMenu = this.listOrerMenu.concat(orderItem)
    }

    /**
     * 
     * @returns List of menu items 
     */
    getListOrerMenu(){
        return this.listOrerMenu
    }
}