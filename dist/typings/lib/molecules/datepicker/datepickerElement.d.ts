/// <reference types="react" />
import * as React from "react";
export declare type DatePickerElementProperties = {
    current: boolean;
    currentMonth: boolean;
    date: Date;
    selected: boolean;
    onClick?: (date: Date) => void;
};
/**
 * Molecules: DatePicker Element (in the grid)
 */
export declare class DatePickerElement extends React.Component<DatePickerElementProperties, {}> {
    render(): JSX.Element;
    private className();
    private onClick();
}
