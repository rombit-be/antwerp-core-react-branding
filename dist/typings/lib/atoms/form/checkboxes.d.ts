/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "./inputProperties";
export declare type CheckboxOption = {
    label: string | JSX.Element;
    value: string;
    disabled?: boolean;
};
export declare type CheckboxesProperties = {
    options: CheckboxOption[];
} & InputProperties<string[]>;
export declare type CheckboxesState = {
    values: string[];
    isDirty: boolean;
};
/**
 * Atoms: Checkboxgroup element
 */
export declare class Checkboxes extends React.Component<CheckboxesProperties, CheckboxesState> {
    constructor(props: CheckboxesProperties);
    render(): any;
    componentWillReceiveProps(nextProps: CheckboxesProperties): void;
    private renderCheckBoxes();
    private onChange(event);
    private className();
    private isChecked(i);
    private id(i);
}
