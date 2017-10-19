/// <reference types="react" />
import * as React from "react";
export declare type DatePickerElementProperties = {
    current: boolean;
    currentMonth: boolean;
    date: Date;
    disabled?: boolean;
    onClick?: (date: Date) => void;
    selected: boolean;
};
/**
 * Molecules: DatePicker Element (in the grid)
 */
export declare class DatePickerElement extends React.Component<DatePickerElementProperties, {}> {
    render(): JSX.Element;
    private className();
    private onClick();
    private isDisabled();
}
