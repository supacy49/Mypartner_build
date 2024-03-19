import { MbscBase, ElementRef } from './frameworks/angular';
import { MbscCoreOptions } from './core/core';
export interface MbscPageOptions extends MbscCoreOptions {
    context?: string | HTMLElement;
}
export declare class MbscPage extends MbscBase {
    options: MbscPageOptions;
    initElem: ElementRef;
    constructor(hostElement: ElementRef);
    ngAfterViewInit(): void;
}
