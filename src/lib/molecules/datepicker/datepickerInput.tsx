import * as moment from "moment";
import * as React from "react";

import { InputProperties } from "../../atoms/form/inputProperties";
import { TextInput } from "../../atoms/form/typedInputs";
import { Location } from "../../common/locations";
import { DatePicker } from "./datepicker";

export type DatePickerInputProperties = InputProperties<string>;

type Properties = { dateFormat?: string } & DatePickerInputProperties;
type LocalState = { datePickerVisible: boolean, dateFormat?: string, value?: string, position?: any };

/**
 * Molecules: DatePicker element with input
 */
export class DatePickerInput extends React.Component<Properties, LocalState> {

    private static defaultDateFormat = "DD-MM-YYYY";

    public constructor(props: Properties) {
        super(props);
        this.state = {
            dateFormat: this.props.dateFormat || DatePickerInput.defaultDateFormat,
            datePickerVisible: false,
            value: this.props.value,
        };
    }

    public render() {
        return (
            <div>
                <TextInput
                    icon="calendar"
                    iconLocation={Location.Right}
                    onIconClick={(e) => this.showDatePicker(e)}
                    value={this.state.value || ""}
                    placeholder={this.state.dateFormat}
                    {...this.props}
                />
                <DatePicker
                    visible={this.state.datePickerVisible}
                    onSelect={(e) => this.onSelect(e)}
                    value={this.convertStringToDate(this.state.value)}
                    position={this.state.position}
                />
            </div>
        );
    }

    private showDatePicker(e: React.SyntheticEvent<HTMLElement>) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const position: any = {
            left: (left + width) - 336,
            top: top + height,
        };

        this.setState({
            datePickerVisible: true,
            position,
        });
    }

    private onSelect(date: Date): void {
        this.setState({
            datePickerVisible: false,
            value: this.convertDateToString(date),
        });
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
}
