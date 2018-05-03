/// <reference types="react" />
import "./autocomplete.scss";
import * as React from "react";
import { InputProperties } from "./inputProperties";
export declare type AutoCompleteProperties = {
    filterOnType?: boolean;
    onSelectOption?: (value: string) => void;
    options: string[];
} & InputProperties<string>;
export declare type AutoCompleteState = {
    visible: boolean;
    value?: string;
};
/**
 * Atoms: Autocomplete
 */
export declare class AutoComplete extends React.Component<AutoCompleteProperties, AutoCompleteState> {
    constructor(props: AutoCompleteProperties);
    render(): any;
    private renderOptions();
    private onKeyPress;
    private onBlur;
    private onChange;
    private onSelectOption;
    private hasOptions();
    private selectFirstOption;
    private getOptions();
    private getInputProps();
}
