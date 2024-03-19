import { MbscControlBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService } from './frameworks/angular';
import './presets/temperature';
import './presets/distance';
import './presets/speed';
import './presets/force';
import './presets/mass';
import { MbscScrollerOptions } from './core/core';
export interface MbscMeasurementBaseOptions extends MbscScrollerOptions {
    max?: number;
    min?: number;
    defaultValue?: string;
    invalid?: Array<any>;
    scale?: number;
    step?: number;
    wholeText?: string;
    fractionText?: string;
    signText?: string;
}
export interface MbscMeasurementOptions extends MbscMeasurementBaseOptions {
    convert(val: number, unit1: string, unit2: string): number;
}
export interface MbscTemperatureOptions extends MbscMeasurementBaseOptions {
    convert?: boolean;
    defaultUnit?: string;
    unitNames?: any;
    units?: Array<string>;
}
export interface MbscSpeedOptions extends MbscTemperatureOptions {
}
export interface MbscMassOptions extends MbscTemperatureOptions {
}
export interface MbscDistanceOptions extends MbscTemperatureOptions {
}
export interface MbscForceOptions extends MbscTemperatureOptions {
}
export declare class MbscMeasurementBase extends MbscControlBase {
    protected preset: string;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: string): void;
    ngAfterViewInit(): void;
}
export declare class MbscMeasurement extends MbscMeasurementBase {
    options: MbscMeasurementOptions;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
export declare class MbscTemperature extends MbscMeasurementBase {
    options: MbscTemperatureOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
export declare class MbscDistance extends MbscMeasurementBase {
    options: MbscDistanceOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
export declare class MbscSpeed extends MbscMeasurementBase {
    options: MbscSpeedOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
export declare class MbscForce extends MbscMeasurementBase {
    options: MbscForceOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
export declare class MbscMass extends MbscMeasurementBase {
    options: MbscMassOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
