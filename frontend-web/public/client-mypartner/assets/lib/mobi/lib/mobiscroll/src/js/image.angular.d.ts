import { MbscControlBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService } from './frameworks/angular';
import './presets/image';
import { MbscScrollerOptions } from './core/core';
export interface MbscImageOptions extends MbscScrollerOptions {
    defaultValue?: Array<number>;
    enhance?: boolean;
    inputClass?: string;
    invalid?: Array<any>;
    labels?: Array<string>;
    placeholder?: string;
    showInput?: boolean;
}
export declare class MbscImage extends MbscControlBase {
    options: MbscImageOptions;
    target: any;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: string): void;
    ngAfterViewInit(): void;
}
