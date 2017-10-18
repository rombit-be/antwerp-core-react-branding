/// <reference types="react" />
import "./datepickerInput.scss";
import * as React from "react";
import { InputProperties } from "../../atoms/form/inputProperties";
export declare type DatePickerInputProperties = {
    dateFormat?: string;
    displayDateFormat?: string;
} & InputProperties<string>;
export declare type ReduxDatePickerFormAdapterProperties = {
    input?: Partial<DatePickerInputProperties>;
} & Partial<DatePickerInputProperties>;
export declare type DatePickerInputState = {
    dateFormat?: string;
    datePickerVisible: boolean;
    displayDateFormat?: string;
    displayValue?: string;
    id?: string;
    position?: any;
    value?: string;
};
/**
 * Molecules: DatePicker element with input
 */
export declare class DatePickerInput extends React.Component<DatePickerInputProperties, DatePickerInputState> {
    static DefaultDateFormat: string;
    static DefaultDisplayDateFormat: string;
    private static eventName;
    private static registeredComponents;
    constructor(props: DatePickerInputProperties);
    render(): JSX.Element;
    componentWillMount(): void;
    private showDatePicker(e);
    private onChange(e);
    private onSelect(date);
    private onFocus(e);
    private onBlur(e);
    private convertDateToString(date, display, format?);
    private convertStringToDate(value, display, format?);
    private convertValueToDisplayValue(value, valueFormat?, displayValueFormat?);
    private convertDisplayValueToValue(value);
    private dispatchDatepickerOpenEvent(all?);
    private handleDatepickerOpenEvent(e);
    private registerDatepickerOpenEventHandler();
    private eventsAllowed();
}
