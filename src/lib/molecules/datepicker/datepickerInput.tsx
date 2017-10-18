import "./datepickerInput.scss";

import * as moment from "moment";
import * as React from "react";

import { InputProperties } from "../../atoms/form/inputProperties";
import { TextInput } from "../../atoms/form/typedInputs";
import { Location } from "../../common/locations";
import { DatePicker } from "./datepicker";

export type DatePickerInputProperties = {
    dateFormat?: string,
    displayDateFormat?: string,
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

/**
 * Molecules: DatePicker element with input
 */
export class DatePickerInput extends React.Component<DatePickerInputProperties, DatePickerInputState> {

    public static DefaultDateFormat = "YYYY-MM-DD";
    public static DefaultDisplayDateFormat = "DD-MM-YYYY";
    private static eventName: string = "a-datepicker";
    private static registeredComponents: number = 1;

    public constructor(props: DatePickerInputProperties) {
        super(props);
        this.state = {
            dateFormat: this.props.dateFormat || DatePickerInput.DefaultDateFormat,
            datePickerVisible: false,
            displayDateFormat: this.props.displayDateFormat || DatePickerInput.DefaultDisplayDateFormat,
            displayValue: this.convertValueToDisplayValue(this.props.value),
            id: `a-datepicker-${DatePickerInput.registeredComponents++}`,
            value: this.props.value,
        };
    }

    public render() {
        // Prepare the props
        const props = { ...this.props };
        delete props.onChange;
        delete props.value;

        const dateValue: Date = this.convertStringToDate(this.state.value, false);

        return (
            <div className="a-datepicker" style={{ position: "relative" }}>
                <TextInput
                    icon="calendar"
                    iconLocation={Location.Right}
                    onBlur={(e) => this.onBlur(e)}
                    onChange={(e) => this.onChange(e)}
                    onFocus={(e) => this.onFocus(e)}
                    onIconClick={(e) => this.showDatePicker(e)}
                    placeholder={this.state.displayDateFormat}
                    {...props}
                    value={this.state.displayValue}
                />
                <DatePicker
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

    private showDatePicker(e: React.SyntheticEvent<HTMLElement>) {
        const { height } = (e.target as any).parentNode.parentNode.getBoundingClientRect();

        const position: any = {
            right: 0,
            top: height,
        };

        this.setState({
            datePickerVisible: true,
            position,
        });

        this.dispatchDatepickerOpenEvent();
    }

    private onChange(e: React.SyntheticEvent<HTMLInputElement>) {
        const displayValue = e.currentTarget.value;
        const value = this.convertDisplayValueToValue(displayValue);

        this.setState({
            displayValue,
            value,
        });

        if (this.props.onChange) {
            this.props.onChange(value as any);
        }

    }

    private onSelect(date: Date): void {
        const value: string = this.convertDateToString(date, false);
        this.setState({
            datePickerVisible: false,
            value,
        });

        if (this.props.onChange) {
            this.props.onChange(value as any);
        }
    }

    private onFocus(e: React.SyntheticEvent<HTMLInputElement>): void {
        this.dispatchDatepickerOpenEvent(true);

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    private onBlur(e: React.SyntheticEvent<HTMLInputElement>): void {
        this.dispatchDatepickerOpenEvent();

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    private convertDateToString(date: Date, display: boolean): string {
        try {
            return moment(date).format(display ? this.state.displayDateFormat : this.state.dateFormat);
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn(`Cannot convert date to string: ${e.message}`, date);
            return "";
        }
    }

    private convertStringToDate(value: string, display: boolean): Date {
        try {
            if (value) {
                const date = moment(value, display ? this.state.displayDateFormat : this.state.dateFormat)
                    .toDate();
                // tslint:disable-next-line:no-console
                return date;
            }
            return undefined;
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn(`Cannot convert string to date: ${e.message}`, value);
            return new Date();
        }
    }

    private convertValueToDisplayValue(value: string): string {
        if (value) {
            return this.convertDateToString(this.convertStringToDate(value, false), true);
        }
        return "";
    }

    private convertDisplayValueToValue(value: string): string {
        if (value) {
            return this.convertDateToString(this.convertStringToDate(value, true), false);
        }
        return "";
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
