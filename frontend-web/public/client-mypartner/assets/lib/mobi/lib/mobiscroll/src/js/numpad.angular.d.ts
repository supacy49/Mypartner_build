import { MbscControlBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService } from './frameworks/angular';
import { MbscFrameOptions } from './core/core';
export interface MbscNumpadOptions extends MbscFrameOptions {
    allowLeadingZero?: boolean;
    deleteIcon?: string;
    fill?: 'ltr' | 'rtl';
    leftKey?: {
        text: string;
        variable?: string;
        value?: string;
    };
    mask?: string;
    placeholder?: string;
    rightKey?: {
        text: string;
        variable?: string;
        value?: string;
    };
    template?: string;
    onSet?(event: {
        valueText: string;
    }, inst: any): void;
    validate?(data: {
        values: Array<any>;
        variables: any;
    }, inst: any): ({
        disabled: Array<any>;
        invalid: boolean;
    });
    onClear?(event: any, inst: any): void;
    cancelText?: string;
    clearText?: string;
    setText?: string;
}
export declare class MbscNumpad extends MbscControlBase {
    options: MbscNumpadOptions;
    protected preset: string;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: any): void;
    ngAfterViewInit(): void;
}
export declare class MbscNumpadDecimal extends MbscNumpad {
    value: any;
    onChangeEmitter: EventEmitter<number>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
export declare class MbscNumpadDate extends MbscControlBase {
    value: Date;
    onChangeEmitter: EventEmitter<Date>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: Date): void;
    ngAfterViewInit(): void;
}
export declare class MbscNumpadTime extends MbscControlBase {
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: string): void;
    ngAfterViewInit(): void;
}
export declare class MbscNumpadTimespan extends MbscNumpad {
    value: number;
    onChangeEmitter: EventEmitter<number>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
