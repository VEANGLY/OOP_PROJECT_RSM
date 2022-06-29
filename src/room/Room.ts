import {Table} from './Table'
export enum RoomStatus {
    SINGLE_ROOM="single", 
    COUPLE_ROOM = 'cuple',
    FAMILY_ROOM = 'family', 
    GREETING_ROOM = 'getting',
    SPECIAL_ROOM = 'special'
}

export class Room {
    private tables: Table[] = [];
    constructor(
        private roomId:number,
        private status: RoomStatus,
        private maxCapacity: number
    ) {}
        /**
         * 
         * @param table add table to the room.
         */
    addTable(table:Table){
        if(this.maxCapacity > this.tables.length){
            this.tables.push(table);
        }
        
    }

    /**
     * 
     * @returns get all tables in the room
     */
    getTable():Table[] {
        return this.tables;
    }

    /**
     * 
     * @returns true is room is free
     */
     isRoomFree():boolean {
        let tables = this.getTable();
        let isTableFree = false;
        tables.forEach(table =>{
            if(!table.hasCustomer()){
                isTableFree = true;
            }
        }) 
        return isTableFree;
    } 
}