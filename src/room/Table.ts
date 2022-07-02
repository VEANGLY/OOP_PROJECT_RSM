import { Customer } from "../human/customer/Customer";
export class Table {
    private customers: Customer[]= [];  
    constructor(
        private tableID:number,
        private maxChairs: number
    ) {}
    getTableId():number {
        return this.tableID;
    }
    /**
     * 
     * @param customer Add customer to table
     */
    addCustomer(customer: Customer){
        if(this.isTableFree()){
            this.customers.push(customer);
        }
    }
    /**
     * 
     * @returns all customers
     */
    getCustomer():Customer[]{
        return this.customers
    }
    /**
     * 
     * @returns true is room is free
     */
    isTableFree():boolean{
        return this.getCustomer().length < this.maxChairs 
    }
    /**
     * 
     * @returns number of customers
     */
    numberOfCustomerOnTable(){
        return this.getCustomer().length;
    }

    /**
     * 
     * @returns true if have customer at least one
     */
    hasCustomer(){
        return (this.customers.length > 0);
    }
    /**
     * Set customerID to tableID
     */
    setCustomerIDToTableID(){
        this.customers.forEach(customer=>{
            customer.setCustomerID(this.tableID);
        })
    }
}
