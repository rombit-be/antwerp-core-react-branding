import "./datepickerInput.scss";

import * as React from "react";

import * as moment from "moment";

import { InputProperties } from "../../atoms/form/inputProperties";
import { TextInput } from "../../atoms/form/typedInputs";
import { Locations } from "../../common/locations";
import { DatePicker } from "./datepicker";

export type DatePickerInputProperties = {
    dateFormat?: string,
    displayDateFormat?: string,
    minDate?: string,
}
    & InputProperties<string>;

export type ReduxDatePickerFormAdapterProperties = { input?: Partial<DatePickerInputProperties> }
    & Partial<DatePickerInputProperties>;

export type DatePickerInputState = {
    dateFormat?: string,
    datePickerVisible: boolean,
    displayDateFormat?: string,
    displayValue?: string,
    id?: string,
    position?: any,
    value?: string,
};

type Event = React.SyntheticEvent<HTMLInputElement>;

/**
 * Molecules: DatePicker element with input
 */
export class DatePickerInput extends React.Component<DatePickerInputProperties, DatePickerInputState> {

    public static DefaultDateFormat = "YYYY-MM-DD";
    public static DefaultDisplayDateFormat = "DD-MM-YYYY";
    private static eventName: string = "a-datepicker";
    private static onChangeDeferredTimeout: number = 555;
    private static onChangeTimerId: number = -1;
    private static registeredComponents: number = 1;

    public constructor(props: DatePickerInputProperties) {
        super(props);

        const dateFormat = props.dateFormat || DatePickerInput.DefaultDateFormat;
        const displayDateFormat = props.displayDateFormat || DatePickerInput.DefaultDisplayDateFormat;

        this.state = {
            dateFormat,
            datePickerVisible: false,
            displayDateFormat,
            displayValue: this.convertValueToDisplayValue(this.props.value, dateFormat, displayDateFormat) || "",
            id: `a-datepicker-${DatePickerInput.registeredComponents++}`,
            value: this.props.value,
        };
    }

    public render() {
        // Prepare the props
        const props = { ...this.props };
        delete props.onChange;
        delete props.onFocus;
        delete props.onBlur;
        delete props.value;
        delete props.minDate;

        const dateValue: Date = this.convertStringToDate(this.state.value, false);

        return (
            <div className="a-datepicker" style={{ position: "relative" }}>
                <TextInput
                    icon="calendar"
                    iconLocation={Locations.Right}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onIconClick={this.showDatePicker}
                    placeholder={this.state.displayDateFormat}
                    {...props}
                    value={this.state.displayValue}
                />
                <DatePicker
                    minDate={this.props.minDate ? this.convertStringToDate(this.props.minDate, false) : null}
                    onSelect={(e) => this.onSelect(e)}
                    position={this.state.position}
                    value={dateValue}
                    visible={this.state.datePickerVisible}
                />
            </div>
        );
    }

    public componentWillMount() {
        this.registerDatepickerOpenEventHandler();
    }

    public componentWillReceiveProps(next: DatePickerInputProperties) {
        if (next.value !== this.state.value) {
            this.setState({
                datePickerVisible: false,
                displayValue: this.convertValueToDisplayValue(next.value, this.state.dateFormat, this.state.displayDateFormat) || "",
                value: next.value,

            });
        }
    }

    private showDatePicker = (e: Event): void => {
        if (this.state.datePickerVisible) {
            this.setState({
                datePickerVisible: false,
            });
        } else {
            const height = (e.target as any).previousSibling.offsetHeight;
            const top = (e.target as any).parentNode.offsetTop;

            const position: any = {
                right: 0,
                top: height + top,
            };

            this.setState({
                datePickerVisible: true,
                position,
            });

            this.dispatchDatepickerOpenEvent();
        }
    }

    // #region private handlers

    private changeHandler(e: Event, upstreamChangeHandler?: (e: Event) => void) {
        // let displayValue = e.currentTarget.value;
        // if (moment(e.currentTarget.value, this.state.displayDateFormat, true).isValid()) {
            const displayValue = moment(e.currentTarget.value, this.state.displayDateFormat, true).format(this.state.displayDateFormat);
            const modelValue = this.convertDisplayValueToValue(displayValue);
            const value = displayValue && modelValue ? modelValue : displayValue;

            this.setState({
                displayValue,
                value,
            });

            if (upstreamChangeHandler) {
                if (DatePickerInput.onChangeTimerId) {
                    clearTimeout(DatePickerInput.onChangeTimerId);
                }

                DatePickerInput.onChangeTimerId = setTimeout(() => {
                    if (moment(value, this.state.dateFormat, true).isValid()) {
                        upstreamChangeHandler(value as any);
                    }
                }, DatePickerInput.onChangeDeferredTimeout) as any;
            }
        // } else {
        //     this.setState({
        //         displayValue,
        //     });
        // }
    }

    private onChange = (e: Event): void => {
        this.changeHandler(e, this.props.onChange);
    }

    private onFocus = (e: Event): void => {
        this.dispatchDatepickerOpenEvent(true);
        this.changeHandler(e, this.props.onFocus);
    }

    private onBlur = (e: Event): void => {
        this.dispatchDatepickerOpenEvent();
        this.changeHandler(e, this.props.onBlur);
    }

    private onSelect = (date: Date): void => {
        const displayValue: string = this.convertDateToString(date, true);
        const value: string = this.convertDateToString(date, false);
        this.setState({
            datePickerVisible: false,
            displayValue,
            value,
        });

        if (this.props.onChange) {
            this.props.onChange(value as any);
        }
    }

    // #endregion

    private convertDateToString(date: Date, display: boolean, format?: string): string {
        format = format || (display ? this.state.displayDateFormat : this.state.dateFormat);
        try {
            return moment(date).format(format);
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn(`Cannot convert date to string: ${e.message}`, { date, display, format });
            return "";
        }
    }

    private convertStringToDate(value: string, display: boolean, format?: string): Date {
        format = format || (display ? this.state.displayDateFormat : this.state.dateFormat);
        try {
            if (value) {
                const date = moment(value, format)
                    .toDate();
                return date;
            }
            return undefined;
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn(`Cannot convert string to date: ${e.message}`, { value, display, format });
            return new Date();
        }
    }

    private convertValueToDisplayValue(value: string, valueFormat?: string, displayValueFormat?: string): string {
        try {
            if (value) {
                return this.convertDateToString(
                    this.convertStringToDate(value, false, valueFormat),
                    true,
                    displayValueFormat);
            }
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn(`Cannot convert value to display value: ${e.message}`, { value, valueFormat, displayValueFormat });
        }

        return "";
    }

    private convertDisplayValueToValue(value: string): string {
        if (value) {
            return this.convertDateToString(this.convertStringToDate(value, true), false);
        }
        return undefined;
    }

    // Window datepicker utils

    private dispatchDatepickerOpenEvent(all: boolean = false): void {
        if (this.eventsAllowed()) {
            window.dispatchEvent(new CustomEvent(DatePickerInput.eventName, { detail: all ? "all" : this.state.id }));
        }
    }

    private handleDatepickerOpenEvent(e: CustomEvent): void {
        const id: string = e.detail as string;
        if (id !== this.state.id && this.state.datePickerVisible) {
            this.setState({ datePickerVisible: false });
        }
    }

    private registerDatepickerOpenEventHandler(): void {
        if (this.eventsAllowed()) {
            window.addEventListener(DatePickerInput.eventName, (e) => this.handleDatepickerOpenEvent(e as CustomEvent));
        }
    }

    private eventsAllowed(): boolean {
        return window && window.dispatchEvent && CustomEvent ? true : false;
    }
}
