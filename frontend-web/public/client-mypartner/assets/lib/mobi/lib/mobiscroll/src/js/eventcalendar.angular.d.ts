import { MbscDataControlBase, ElementRef, NgZone } from './frameworks/angular';
import './presets/eventcalendar';
import { MbscDataFrameOptions } from './core/core';
export interface MbscEventcalendarOptions extends MbscDataFrameOptions {
    calendarHeight?: number;
    calendarWidth?: number;
    calendarScroll?: 'horizontal' | 'vertical';
    data?: Array<{
        start?: Date;
        end?: Date;
        d?: Date | string | number;
        text?: string;
        color?: string;
    }>;
    invalid?: Array<string | {
        start: Date;
        end: Date;
        d?: string;
    } | Date>;
    layout?: 'liquid' | 'fixed';
    max?: Date;
    min?: Date;
    months?: number | 'auto';
    showEventCount?: boolean;
    showOnFocus?: boolean;
    showOnTap?: boolean;
    showOuterDays?: boolean;
    valid?: Array<string | {
        start: Date;
        end: Date;
        d?: string;
    } | Date>;
    weekCounter?: 'year' | 'month';
    weekDays?: 'full' | 'short' | 'min';
    yearChange?: boolean;
    amText?: string;
    dateFormat?: string;
    dayNames?: Array<string>;
    dayNamesMin?: Array<string>;
    dayNamesShort?: Array<string>;
    firstDay?: number;
    monthNames?: Array<string>;
    monthNamesShort?: Array<string>;
    newText?: string;
    pmText?: string;
    timeFormat?: string;
    onDayChange?(event: {
        date: Date;
        marked?: any;
        selected?: 'start' | 'end';
        target: HTMLElement;
    }, inst: any): void;
    onMonthChange?(event: {
        year: number;
        month: number;
    }, inst: any): void;
    onMonthLoading?(event: {
        year: number;
        month: number;
    }, inst: any): void;
    onMonthLoaded?(event: {
        year: number;
        month: number;
    }, inst: any): void;
}
export declare class MbscEventcalendar extends MbscDataControlBase {
    options: MbscEventcalendarOptions;
    constructor(initialElem: ElementRef, zone: NgZone);
    setNewValue(v: any): void;
    refreshData(newData: any): void;
    ngAfterViewInit(): void;
}
