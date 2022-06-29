import {MenuManager} from './menu/MenuManager'
import {OrderMenu} from './menu/OrderMenu'

import { DayOff } from './calendar/DayOff'
import {Event,EventCategory} from './calendar/Event'
import {DateTime} from './calendar/DateTime'

let start = new DateTime(13,4,2022,10);
let end = new DateTime(18,4,2022,10);
let day = new DayOff(EventCategory.FESTIVAL, start, end,true,false);

console.log(day.getDayOff());