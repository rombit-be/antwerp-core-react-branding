/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "../..";
export declare type ConfirmProperties = InputProperties<boolean>;
/**
 * Atoms: Form element confirm
 */
export declare class Confirm extends React.Component<ConfirmProperties, {}> {
    render(): any;
    private getOptions();
    private parseValueToString(value);
}
