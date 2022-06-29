import { DateTime } from "./DateTime";

export enum EventCategory {
  WEEKEND ='WEEKEND',
  FESTIVAL = 'FASTIVAL',
  SPECIAL = 'SPECIAL DAY',
  REGULARLY = 'NORMAL DAY'
}

export abstract class Event {
  constructor(
    protected category: EventCategory,
    protected start: DateTime,
    protected end: DateTime,
  ) {}
}
