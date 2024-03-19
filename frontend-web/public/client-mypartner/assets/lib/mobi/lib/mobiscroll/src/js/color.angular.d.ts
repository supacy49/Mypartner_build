import { MbscDataControlBase, ElementRef, NgZone, NgControl, EventEmitter, MbscInputService } from './frameworks/angular';
import { MbscDataFrameOptions } from './core/core';
export interface MbscColorOptions extends MbscDataFrameOptions {
    clear?: boolean;
    data?: Array<string | {
        color: string;
    }>;
    defaultValue?: string;
    enhance?: boolean;
    format?: 'hex' | 'rgb' | 'hsl';
    inputClass?: string;
    mode?: 'preset' | 'refine';
    navigation?: 'horizontal' | 'vertical';
    preview?: boolean;
    previewText?: boolean;
    rows?: number;
    valueText?: string;
    onSet?(event: {
        valueText: string;
    }, inst: any): void;
    onClear?(event: any, inst: any): void;
}
export declare class MbscColor extends MbscDataControlBase {
    options: MbscColorOptions;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    refreshData(newData: any): void;
    ngAfterViewInit(): void;
}
