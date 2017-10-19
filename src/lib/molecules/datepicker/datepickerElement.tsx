import * as classNames from "classnames";
import * as React from "react";

export type DatePickerElementProperties = {
    current: boolean,
    currentMonth: boolean,
    date: Date,
    disabled?: boolean,
    onClick?: (date: Date) => void;
    selected: boolean,
};

/**
 * Molecules: DatePicker Element (in the grid)
 */
export class DatePickerElement extends React.Component<DatePickerElementProperties, {}> {
    public render(): JSX.Element {
        return (
            <td>
                <button
                    type="button"
                    className={this.className()}
                    onClick={() => this.onClick()}
                >
                    {this.props.date.getDate()}
                </button>
            </td>
        );
    }

    private className(): string {
        return classNames(
            { "is-faded": this.isDisabled() },
            { "is-current": this.props.current },
            { "is-selected": this.props.selected },
        );
    }

    private onClick(): void {
        if (this.props.onClick && !this.isDisabled()) {
            this.props.onClick(this.props.date);
        }
    }

    private isDisabled(): boolean {
        return !this.props.currentMonth || this.props.disabled;
    }
}
