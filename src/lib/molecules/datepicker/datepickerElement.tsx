import * as classNames from "classnames";
import * as React from "react";

export type DatePickerElementProperties = {
    current: boolean,
    currentMonth: boolean,
    date: Date,
    selected: boolean,
    onClick?: (date: Date) => void;
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
            { "is-faded": !this.props.currentMonth },
            { "is-current": this.props.current },
            { "is-selected": this.props.selected },
        );
    }

    private onClick(): void {
        if (this.props.onClick) {
            this.props.onClick(this.props.date);
        }
    }
}
