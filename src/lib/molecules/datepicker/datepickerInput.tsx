import * as moment from "moment";
import * as React from "react";

import { InputProperties } from "../../atoms/form/inputProperties";
import { TextInput } from "../../atoms/form/typedInputs";
import { Location } from "../../common/locations";
import { DatePicker } from "./datepicker";

export type DatePickerInputProperties = { dateFormat?: string } & InputProperties<string>;
export type ReduxDatePickerFormAdapterProperties = { input?: Partial<DatePickerInputProperties> }
    & Partial<DatePickerInputProperties>;
export type DatePickerInputState = {
    dateFormat?: string,
    datePickerVisible: boolean,
    id?: string,
    position?: any,
    value?: string,
};

/**
 * Molecules: DatePicker element with input
 */
export class DatePickerInput extends React.Component<DatePickerInputProperties, DatePickerInputState> {

    private static defaultDateFormat = "DD-MM-YYYY";
    private static eventName: string = "a-datepicker";
    private static registeredComponents: number = 1;

    public constructor(props: DatePickerInputProperties) {
        super(props);
        this.state = {
            dateFormat: this.props.dateFormat || DatePickerInput.defaultDateFormat,
            datePickerVisible: false,
            id: `a-datepicker-${DatePickerInput.registeredComponents++}`,
            value: this.props.value,
        };
    }

    public render() {
        // Prepare the props
        const props = { ...this.props };
        delete props.onChange;
        delete props.value;

        return (
            <div style={{ position: "relative" }}>
                <TextInput
                    icon="calendar"
                    iconLocation={Location.Right}
                    onBlur={(e) => this.onBlur(e)}
                    onChange={(e) => this.onChange(e)}
                    onFocus={(e) => this.onFocus(e)}
                    onIconClick={(e) => this.showDatePicker(e)}
                    placeholder={this.state.dateFormat}
                    triggerChangeOnNextProps={true}
                    value={this.state.value || ""}
                    {...props}
                />
                <DatePicker
                    onSelect={(e) => this.onSelect(e)}
                    position={this.state.position}
                    value={this.convertStringToDate(this.state.value)}
                    visible={this.state.datePickerVisible}
                />
            </div>
        );
    }

    public componentWillMount() {
        this.registerDatepickerOpenEventHandler();
    }

    private showDatePicker(e: React.SyntheticEvent<HTMLElement>) {
        const { height } = (e.target as any).getBoundingClientRect();

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
        this.setState({ value: e.currentTarget.value });
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    private onSelect(date: Date): void {
        this.setState({
            datePickerVisible: false,
            value: this.convertDateToString(date),
        });
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

    private convertDateToString(date: Date): string {
        try {
            return moment(date).format(this.state.dateFormat);
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn(`Cannot convert date to string: ${e.message}`, date);
            return "";
        }
    }

    private convertStringToDate(value: string): Date {
        try {
            if (value) {
                const date = moment(value, this.state.dateFormat).toDate();
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
