import * as React from "react";

import * as classNames from "classnames";

export type DatePickerElementProperties = {
    current: boolean,
    disabled?: boolean,
    onClick?: (date: Date | number) => void;
    selected: boolean,
    value: Date | number,
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
                    {this.renderDate()}
                </button>
            </td>
        );
    }

    private renderDate(): string {
        if (this.props.value instanceof Date) {
            return (this.props.value as Date).getDate().toString();
        } else {
            return this.props.value.toString();
        }
    }

    private className(): string {
        return classNames(
            { "is-current": this.props.current },
            { "is-faded": this.props.disabled },
            { "is-selected": this.props.selected },
        );
    }

    private onClick(): void {
        if (this.props.onClick && !this.props.disabled) {
            this.props.onClick(this.props.value);
        }
    }
}
