/// <reference types="react" />
import * as React from "react";
import { InputProperties } from "../../atoms/form/inputProperties";
export declare type DatePickerInputProperties = {
    dateFormat?: string;
} & InputProperties<string>;
export declare type ReduxDatePickerFormAdapterProperties = {
    input?: Partial<DatePickerInputProperties>;
} & Partial<DatePickerInputProperties>;
export declare type DatePickerInputState = {
    dateFormat?: string;
    datePickerVisible: boolean;
    id?: string;
    position?: any;
    value?: string;
};
/**
 * Molecules: DatePicker element with input
 */
export declare class DatePickerInput extends React.Component<DatePickerInputProperties, DatePickerInputState> {
    private static defaultDateFormat;
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
    private convertDateToString(date);
    private convertStringToDate(value);
    private dispatchDatepickerOpenEvent(all?);
    private handleDatepickerOpenEvent(e);
    private registerDatepickerOpenEventHandler();
    private eventsAllowed();
}
