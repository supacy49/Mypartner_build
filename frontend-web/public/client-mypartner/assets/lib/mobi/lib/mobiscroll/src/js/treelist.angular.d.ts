import { MbscControlBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService } from './frameworks/angular';
import './presets/treelist';
import { MbscScrollerOptions } from './core/core';
export interface MbscTreelistOptions extends MbscScrollerOptions {
    defaultValue?: Array<number>;
    inputClass?: string;
    invalid?: Array<any>;
    labels?: Array<string>;
    placeholder?: string;
    showInput?: boolean;
}
export declare class MbscTreelist extends MbscControlBase {
    options: MbscTreelistOptions;
    target: any;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: string): void;
    ngAfterViewInit(): void;
}
