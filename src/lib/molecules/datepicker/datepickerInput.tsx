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

    private static defaultDateFormat = "MM-DD-YYYY";

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
                    {...this.props}
                />
                <DatePicker visible={this.state.datePickerVisible} position={this.state.position} />
            </div>
        );
    }

    private showDatePicker(e: React.SyntheticEvent<HTMLElement>) {
        // tslint:disable-next-line:no-console
        const position: any = {
            left: (e.currentTarget.offsetLeft + e.currentTarget.clientWidth) - 336,
            top: e.currentTarget.offsetTop + e.currentTarget.clientHeight,
        };

        this.setState({
            datePickerVisible: true,
            position,
        });

    }
}
