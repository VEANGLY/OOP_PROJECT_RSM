
import { DateTime } from "./DateTime";
import { Event, EventCategory } from "./Event";

export class DayOff extends Event {
  constructor(
    category:EventCategory,
    start: DateTime,
    end: DateTime,
    private dayOff:boolean = false,
    private promotion:boolean = false
  ) {
    super(category, start, end);
  }

  getDayOff(){
    if ( 
        this.dayOff &&
        this.promotion &&
        this.category != EventCategory.REGULARLY
      ){
        return true;
      }else{
        return false;
      }
  } 
}