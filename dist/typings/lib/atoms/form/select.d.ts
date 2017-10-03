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
/**
 * Atoms: Radiobutton group element
 */
export declare class Select extends React.Component<SelectProperties, {}> {
    render(): any;
    private renderOptions();
    private renderDescription();
    private className();
    private optionId(i);
    private id();
}
