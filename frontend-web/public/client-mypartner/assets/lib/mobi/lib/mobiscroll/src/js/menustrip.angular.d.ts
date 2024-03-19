import { EventEmitter, ElementRef, QueryList, MbscBase, Observable, NgZone } from './frameworks/angular';
import { MbscCoreOptions } from './core/core';
export interface MbscMenustripOptions extends MbscCoreOptions {
    context?: string | HTMLElement;
    display?: 'top' | 'bottom' | 'inline';
    itemWidth?: number;
    layout?: 'liquid' | 'fixed';
    paging?: boolean;
    select?: 'single' | 'multiple' | 'off';
    snap?: boolean;
    type?: 'options' | 'tabs' | 'menu';
    variant?: 'a' | 'b';
    threshold?: number;
    tapHighlight?: boolean;
    onItemTap?(event: {
        target: HTMLElement;
    }, inst: any): void;
    onMarkupReady?(event: {
        target: HTMLElement;
    }, inst: any): void;
    onAnimationStart?(event: any, inst: any): void;
    onAnimationEnd?(event: any, inst: any): void;
    onMove?(event: any, inst: any): void;
    onGestureStart?(event: any, inst: any): void;
    onGestureEnd?(event: any, inst: any): void;
}
export declare class MbscMenustripService {
    private _instanceSubject;
    notifyInstanceRead(instance: any): void;
    onInstanceReady(): Observable<any>;
}
export declare class MbscMenustripItem {
    private _menustripService;
    private _elem;
    private _selected;
    private _disabled;
    icon: string;
    disabled: boolean;
    selected: boolean;
    selectedChange: EventEmitter<boolean>;
    readonly nativeElement: any;
    private _instance;
    constructor(_menustripService: MbscMenustripService, _elem: ElementRef);
    toggle(): void;
}
export declare class MbscMenustrip extends MbscBase {
    zone: NgZone;
    private _menustripService;
    options: MbscMenustripOptions;
    rootElem: ElementRef;
    items: QueryList<MbscMenustripItem>;
    constructor(initialElem: ElementRef, zone: NgZone, _menustripService: MbscMenustripService);
    ngAfterViewInit(): void;
    tapHandler(event: any, inst: any): void;
    private _getItem(nativeEl);
}
