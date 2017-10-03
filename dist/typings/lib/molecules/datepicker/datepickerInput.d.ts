/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "../../atoms/form/inputProperties";
export declare type DatePickerInputProperties = {
    dateFormat?: string;
} & InputProperties<string>;
export declare type DatePickerInputState = {
    datePickerVisible: boolean;
    dateFormat?: string;
    value?: string;
    position?: any;
};
/**
 * Molecules: DatePicker element with input
 */
export declare class DatePickerInput extends React.Component<DatePickerInputProperties, DatePickerInputState> {
    private static defaultDateFormat;
    constructor(props: DatePickerInputProperties);
    render(): JSX.Element;
    private showDatePicker(e);
    private onChange(e);
    private onSelect(date);
    private convertDateToString(date);
    private convertStringToDate(value);
}
