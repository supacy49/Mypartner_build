import { MbscControlBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService } from './frameworks/angular';
import './presets/number';
import { MbscScrollerOptions } from './core/core';
export interface MbscNumberOptions extends MbscScrollerOptions {
    defaultValue?: string;
    invalid?: Array<any>;
    max?: number;
    min?: number;
    scale?: number;
    step?: number;
    wholeText?: string;
    fractionText?: string;
    signText?: string;
}
export declare class MbscNumber extends MbscControlBase {
    options: MbscNumberOptions;
    value: any;
    onChangeEmitter: EventEmitter<number>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: any): void;
    ngAfterViewInit(): void;
}
