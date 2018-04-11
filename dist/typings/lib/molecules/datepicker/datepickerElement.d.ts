/// <reference types="react" />
import * as React from "react";
export declare type DatePickerElementProperties = {
    current: boolean;
    disabled?: boolean;
    faded?: boolean;
    onClick?: (date: Date | number) => void;
    selected: boolean;
    value: Date | number;
};
/**
 * Molecules: DatePicker Element (in the grid)
 */
export declare class DatePickerElement extends React.Component<DatePickerElementProperties, {}> {
    render(): JSX.Element;
    private renderDate();
    private className();
    private onClick();
}
