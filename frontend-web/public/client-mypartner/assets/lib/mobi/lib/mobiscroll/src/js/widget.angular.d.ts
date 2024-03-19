import { ElementRef, MbscBase } from './frameworks/angular';
import { MbscFrameOptions } from './core/core';
export interface MbscWidgetOptions extends MbscFrameOptions {
}
export declare class MbscWidget extends MbscBase {
    options: MbscWidgetOptions;
    constructor(initialElem: ElementRef);
    ngAfterViewInit(): void;
}
