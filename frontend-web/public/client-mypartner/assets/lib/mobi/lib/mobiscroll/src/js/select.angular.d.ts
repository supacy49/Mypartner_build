import { MbscDataControlBase, ElementRef, NgZone, NgControl, EventEmitter, MbscInputService } from './frameworks/angular';
import './presets/select';
import { MbscDataControlOptions, MbscScrollerOptions } from './core/core';
export declare type MbscDataScrollerOptions = MbscDataControlOptions & MbscScrollerOptions;
export interface MbscSelectOptions extends MbscDataScrollerOptions {
    counter?: boolean;
    data?: Array<{
        text?: string;
        value?: any;
        group?: string;
        html?: string;
        disabled?: boolean;
    }>;
    dataText?: string;
    dataGroup?: string;
    dataValue?: string;
    group?: boolean | {
        header?: boolean;
        groupedWheel?: boolean;
        clustered?: boolean;
    };
    groupLabel?: string;
    inputClass?: string;
    invalid?: Array<any>;
    label?: string;
    placeholder?: string;
    showInput?: boolean;
}
export declare class MbscSelect extends MbscDataControlBase {
    options: MbscSelectOptions;
    target: any;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    refreshData(newData: any): void;
    ngAfterViewInit(): void;
}
