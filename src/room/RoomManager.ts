import { Kitchen } from "./kitchen/Kitchen";
import { Room } from "./Room";
import { Table } from "./Table";

export class RoomsManager {
  public rooms: Room[] = [];
  public Kitchen:Kitchen;
    /**
     * 
     * @returns all number of rooms
     */
     getNumberOfRooms(): number {
        return this.rooms.length;
    }

    /**
     * 
     * @param room Add to the Resturant
     */
    addRoom(room: Room) {
        this.rooms.push(room);
    }

    /**
     * return the free rooms
     */
    getFreeRooms(): Room[]|undefined {
        let listFreeRooms:Room[] = [] 
        this.rooms.forEach(room =>{
            if(!room.isRoomFree()){
                listFreeRooms.push(room);
            }
        })
        if(listFreeRooms.length > 0){
            return listFreeRooms
        }else{
            return undefined;
        }
    }

    getAllRooms(){
        return this.rooms;
    }
    

    getTotalOfCutomer(){
        let allNumberOffCustomer = 0; //Defualt
        let temperaryTables:Table[] =[];
        this.getAllRooms().forEach(room => {
            room.getTable().forEach(table=> {
                allNumberOffCustomer+= table.numberOfCustomerOnTable();
            })
        })
        return allNumberOffCustomer;
    }
}

