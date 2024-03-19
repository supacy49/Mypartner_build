import { MbscControlBase, ElementRef, NgZone, NgControl, EventEmitter, MbscInputService } from './frameworks/angular';
import './presets/range';
import { MbscCalbaseOptions } from './core/core';
export interface MbscRangeOptions extends MbscCalbaseOptions {
    autoCorrect?: boolean;
    controls?: 'time' | 'date' | 'calendar';
    endInput?: string | HTMLElement;
    maxRange?: number;
    minRange?: number;
    showSelector?: boolean;
    startInput?: string | HTMLElement;
    fromText?: string;
    toText?: string;
    onSetDate?(event: {
        date: Date;
        active: 'start' | 'end';
        control: 'calendar' | 'date' | 'time';
    }, inst: any): void;
}
export declare class MbscRange extends MbscControlBase {
    options: MbscRangeOptions;
    value: Array<Date>;
    onChangeEmitter: EventEmitter<Array<Date>>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: Array<Date>): void;
    ngAfterViewInit(): void;
}
