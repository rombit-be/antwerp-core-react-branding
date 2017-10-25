/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "./inputProperties";
export declare type RadiobuttonOption = {
    label: string | JSX.Element;
    value: string;
    disabled?: boolean;
};
export declare type RadiobuttonsProperties = {
    options: RadiobuttonOption[];
} & InputProperties<string>;
export declare type RadiobuttonsState = {
    value: string;
    isDirty: boolean;
};
/**
 * Atoms: Radiobutton group element
 */
export declare class Radiobuttons extends React.Component<RadiobuttonsProperties, RadiobuttonsState> {
    constructor(props: RadiobuttonsProperties);
    render(): any;
    componentWillReceiveProps(nextProps: RadiobuttonsProperties): void;
    private onChange(event);
    private renderRadiobuttons();
    private renderDescription();
    private className();
    private isChecked(i);
    private id(i);
    private isError();
}
