export enum CustomerStatus{
  EATING = "EATING", WAITING = "WAITING", COMPLETED = "COMPLETED"
}
export class Customer {
  private payment:number = 0;//default payment
  private customerID:number= 0; //default id
  constructor( private status: CustomerStatus) {}
  
  setCustomerID(id:number){
    this.customerID = id;
  }
  getCustomerID():number{
    return this.customerID;
  }
  setPayment(payment:number){
    this.payment = payment;
  }
  getPayment(){
    return this.payment;
  }
}
