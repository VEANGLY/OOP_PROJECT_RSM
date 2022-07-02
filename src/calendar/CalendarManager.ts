export class CalendarManager {
    public events: Event[] = [];
   
    addEvent(event: Event) {
      this.events.push(event);
    }
   
   getAmountOfDayOff (){
       return this.events.length
   }
}