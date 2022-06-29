
export enum QuantityItem{
    SMALL= 'small',
    MEDIUM = 'medium',
    MASSIVE = 'massive',
}
export abstract class MenuItem {
    constructor(
        protected title: string,
        protected description:string,
        protected price: number,
        protected quantity:QuantityItem
    ){}
    /**
     * 
     * @param price to update whenever customer needs
     */
     abstract updatePrice(price:number):void;
     abstract getPrice():number;
}