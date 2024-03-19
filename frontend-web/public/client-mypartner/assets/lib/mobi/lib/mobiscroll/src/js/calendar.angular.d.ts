import { MbscControlBase, ElementRef, NgZone, NgControl, EventEmitter, OnInit, MbscInputService } from './frameworks/angular';
import './presets/calendar';
import { MbscCalbaseOptions } from './core/core';
export interface MbscCalendarOptions extends MbscCalbaseOptions {
    controls?: 'time' | 'date' | 'calendar';
    events?: {
        start?: Date;
        end?: Date;
        d?: string | Date;
        text?: string;
        color?: string;
    };
    firstSelectDay?: number;
    marked?: Array<Date | number | string>;
    selectType?: 'day' | 'week';
    select?: 'single' | 'multiple' | number;
    setOnDayTap?: boolean;
    onSetDate?(event: {
        date: Date;
        control?: 'calendar' | 'date' | 'time';
    }, inst: any): void;
}
export declare class MbscCalendar extends MbscControlBase implements OnInit {
    options: MbscCalendarOptions;
    private isMulti;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: any): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
