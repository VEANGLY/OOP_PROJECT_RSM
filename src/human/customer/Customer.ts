export enum CustomerStatus{
  EATING = "EATING", WAITING = "WAITING", COMPLETED = "COMPLETED"
}
export class Customer {
  private payment:number = 0;//default payment
  constructor(private customerID:number, private status: CustomerStatus) {}
  
  setCustomerID(id:number){
    this.customerID = id;
  }
}
