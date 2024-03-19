import { MbscControlBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService } from './frameworks/angular';
import './presets/timespan';
import { MbscScrollerOptions } from './core/core';
export interface MbscTimespanOptions extends MbscScrollerOptions {
    defaultValue?: number;
    max?: number;
    min?: number;
    steps?: Array<number>;
    useShortLabels?: boolean;
    wheelOrder?: string;
    labels?: Array<string>;
    labelsShort?: Array<string>;
}
export declare class MbscTimespan extends MbscControlBase {
    options: MbscTimespanOptions;
    value: number;
    onChangeEmitter: EventEmitter<number>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: number): void;
    ngAfterViewInit(): void;
}
