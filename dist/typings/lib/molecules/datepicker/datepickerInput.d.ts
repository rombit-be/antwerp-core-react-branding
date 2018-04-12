/// <reference types="react" />
import "./datepickerInput.scss";
import * as React from "react";
import { InputProperties } from "../../atoms/form/inputProperties";
export declare type DatePickerInputProperties = {
    dateFormat?: string;
    displayDateFormat?: string;
    minDate?: string;
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
    private static onChangeDeferredTimeout;
    private static onChangeTimerId;
    private static registeredComponents;
    constructor(props: DatePickerInputProperties);
    render(): JSX.Element;
    componentWillMount(): void;
    componentWillReceiveProps(next: DatePickerInputProperties): void;
    private showDatePicker;
    private changeHandler(e, upstreamChangeHandler?, force?);
    private onChange;
    private onFocus;
    private onBlur;
    private onSelect;
    private convertDateToString(date, display, format?);
    private convertStringToDate(value, display, format?);
    private convertValueToDisplayValue(value, valueFormat?, displayValueFormat?);
    private convertDisplayValueToValue(value);
    private dispatchDatepickerOpenEvent(all?);
    private handleDatepickerOpenEvent(e);
    private registerDatepickerOpenEventHandler();
    private eventsAllowed();
}
