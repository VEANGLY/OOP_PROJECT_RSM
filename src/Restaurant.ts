import { CalendarManager } from "./calendar/CalendarManager";
import { HumanManager } from "./human/HumanManager";
import { RoomsManager} from "./room/RoomManager";
import { OrderManager } from "./order/OrderManager";
import { MenuManager } from "./menu/MenuManager";

export class Restaurant {
// Restaurant  attributes
  private address?: string;
  private name: string;

// public services
  public calendar: CalendarManager = new CalendarManager();
  public rooms: RoomsManager = new RoomsManager();
  public hr: HumanManager = new HumanManager();
  public Order: OrderManager = new OrderManager();
  public menu: MenuManager = new MenuManager();
  constructor(name: string, address?: string) {
    this.name = name;
    this.address = address;
  }
}
