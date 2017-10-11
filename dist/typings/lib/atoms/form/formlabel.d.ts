/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "./inputProperties";
export declare type FormLabelProperties = {
    for?: string;
    noClass?: boolean;
} & Partial<InputProperties<any>>;
/**
 * Atoms: Label component
 */
export declare class FormLabel extends React.Component<FormLabelProperties, {}> {
    render(): any;
    private className();
    private for();
}
