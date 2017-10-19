/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "./inputProperties";
export declare type SelectOption = {
    label: string | JSX.Element;
    value: string;
    disabled?: boolean;
};
export declare type SelectProperties = {
    options: SelectOption[];
} & InputProperties<string>;
export declare type SelectState = {
    value: string;
};
/**
 * Atoms: Radiobutton group element
 */
export declare class Select extends React.Component<SelectProperties, SelectState> {
    constructor(props: SelectProperties);
    render(): any;
    private renderOptions();
    private renderDescription();
    private onChange(e);
    private className();
    private optionId(i);
    private isError();
    private id();
}
