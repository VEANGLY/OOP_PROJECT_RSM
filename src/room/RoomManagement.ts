import { Room } from "./Room";
export class RoomsManager {
  public rooms: Room[] = [];

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
    
}

