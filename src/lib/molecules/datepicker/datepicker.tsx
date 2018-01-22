import "./datepicker.scss";

import * as React from "react";

import * as classNames from "classnames";

import { Button } from "../../atoms/button";
import { IconButton } from "../../atoms/iconbutton";
import { Locations } from "../../common/locations";
import { DatePickerElement, DatePickerElementProperties } from "./datepickerElement";
import {
    DatePickerGridType,
    DatePickerLocale,
    defaultDatePickerLocale,
    updateGridDateFromDelta,
    updateGridDateFromValue,
} from "./datePickerUtils";

export type DatePickerProperties = {
    locale?: DatePickerLocale,
    minDate?: Date,
    onSelect?: (date: Date) => void;
    position?: { top: number, left: number };
    value?: Date,
    visible?: boolean,
};
export type DatePickerState = {
    viewDate: Date,
    gridType: DatePickerGridType;

} & DatePickerProperties;

export type DatePickerMonth = string;
export type DatePickerWeekDay = string;

/**
 * Molecules: DatePicker
 */
export class DatePicker extends React.Component<DatePickerProperties, DatePickerState> {

    private static gridDateCols: number = 7;
    private static gridDateRows: number = 5;
    private static gridYearCols: number = 4;
    private static gridYearRows: number = 3;

    public constructor(props: DatePickerProperties) {
        super(props);
        this.state = {
            gridType: "d",
            locale: props.locale || defaultDatePickerLocale(),
            value: props.value,
            viewDate: this.calculateViewDate(props.value),
            visible: props.visible === undefined ? false : props.visible,
        };
    }

    public render(): any {
        return (
            <div
                className={this.className()}
                role="datepicker"
                style={this.props.position || {}}
            >
                <div className="m-datepicker__nav">
                    <IconButton
                        icon="angle-left"
                        location={Locations.Left}
                        onClick={this.onPrevious}
                    />
                    <Button
                        className="m-datepicker__title a-button"
                        onClick={this.onToggleGridType}
                        text={this.renderTitle()}
                    />
                    <IconButton
                        icon="angle-right"
                        location={Locations.Right}
                        onClick={this.onNext}
                    />
                </div>
                <table>
                    {this.renderTableHeader()}
                    <tbody className="m-datepicker__calendar">
                        {this.renderTableGrid()}
                    </tbody>
                </table>
            </div>
        );
    }

    public componentWillReceiveProps(nextProps: DatePickerProperties): void {
        if (nextProps.value) {
            this.setState({
                value: nextProps.value,
                viewDate: this.calculateViewDate(nextProps.value),
                visible: nextProps.visible,
            });
        } else {
            this.setState({
                visible: nextProps.visible,
            });
        }
    }

    // #region rendering utils

    private className(): string {
        return classNames(
            "m-datepicker",
            { "is-open": this.state.visible },
            { "m-datepicker--fixed": this.state.visible },
        );
    }

    private renderTitle(): string {
        switch (this.state.gridType) {
            case "d":
                return this.state.locale.months[this.state.viewDate.getMonth()] +
                    " " + this.state.viewDate.getFullYear();
            case "m":
            case "y":
            default:
                return this.state.viewDate.getFullYear().toString();
        }

    }

    private renderTableHeader(): JSX.Element {
        switch (this.state.gridType) {
            case "d":
                return (
                    <thead>
                        <tr className="m-datepicker__days">
                            {this.state.locale.weekdays.map((x, i) => (<th key={`weekday-${i}`}>{x}</th>))}
                        </tr>
                    </thead>
                );
            default:
                return null!;
        }
    }

    private renderTableGrid(): JSX.Element[] {
        return this.compileGrid().map((x, i) => (
            <tr key={i}>
                {x.map((y, j) => (
                    <DatePickerElement
                        key={j}
                        {...y}
                    />
                ))}
            </tr>
        ));
    }

    // #endregion

    // #region handlers

    private onPrevious: () => void = () => {
        this.onNavigate("previous");
    }

    private onNext: () => void = () => {
        this.onNavigate("next");
    }

    private onNavigate(direction: "next" | "previous") {
        const factor = direction === "next" ? 1 : -1;
        switch (this.state.gridType) {
            case "y":
                this.setViewDateRelative(4 * factor, "y");
                break;
            case "m":
                this.setViewDateRelative(1 * factor, "y");
                break;
            case "d":
            default:
                this.setViewDateRelative(1 * factor, "m");
                break;

        }
    }

    private onToggleGridType: () => void = () => {
        this.setState({
            gridType: this.state.gridType === "d" ? "y" : "d",
        });
    }

    private onSelectDate: (value: Date) => void = (value: Date) => {
        this.setState({ value, visible: false });
        if (this.props.onSelect) {
            this.props.onSelect(value);
        }
    }

    private onSelectYear: (year: number) => void = (year: number) => {
        const value = updateGridDateFromValue(this.state.value || new Date(), year, "y");
        // tslint:disable-next-line:no-console
        console.log(value);
        this.setState({
            gridType: "d",
            value,
            viewDate: this.calculateViewDate(value),
        });

    }

    private setViewDateRelative(delta: number, type: DatePickerGridType) {
        this.setState({
            viewDate: updateGridDateFromDelta(this.state.viewDate, delta, type),
        });
    }

    // #endregion

    // #region grid methods

    private compileGrid(): DatePickerElementProperties[][] {
        switch (this.state.gridType) {
            case "y":
                return this.compileYearGrid();
            case "d":
            default:
                return this.compileDateGrid();
        }
    }

    private compileYearGrid(): DatePickerElementProperties[][] {
        const viewDate = this.state.viewDate;
        const gridStartDate = viewDate.getFullYear() - 5;

        // Initialize a two dimensional array
        const grid: DatePickerElementProperties[][] = [[]];

        // Loop through the number of weeks and initialize the row
        for (let i = 0; i < DatePicker.gridYearRows; i++) {
            grid[i] = [];

            // Loop through the days
            for (let j = 0; j < DatePicker.gridYearCols; j++) {

                // Calculate the index and the current index data
                const value = ((i * DatePicker.gridYearCols) + j) + gridStartDate;
                const disabled = this.props.minDate ? this.dateLowerThan(new Date(value, 1, 365), this.props.minDate) : false;

                grid[i][j] = {
                    current: (new Date().getFullYear()) === value,
                    disabled,
                    onClick: this.onSelectYear,
                    selected: this.yearEquals(new Date(value, 1, 1), this.state.value),
                    value,
                };
            }
        }

        return grid;
    }

    private compileDateGrid(): DatePickerElementProperties[][] {

        const viewDate = this.state.viewDate;
        const gridStartDate = this.gridStartDate(viewDate);

        // Initialize a two dimensional array
        const grid: DatePickerElementProperties[][] = [[]];

        // Loop through the number of weeks and initialize the row
        for (let i = 0; i < DatePicker.gridDateRows; i++) {
            grid[i] = [];

            // Loop through the days
            for (let j = 0; j < DatePicker.gridDateCols; j++) {

                // Calculate the index and the current index data
                const index = (i * DatePicker.gridDateCols) + j;
                const value = this.gridDateFromIndex(gridStartDate, index);
                const disabled = (this.props.minDate ? this.dateLowerThan(value, this.props.minDate) : false);
                const faded = !(viewDate.getMonth() === value.getMonth());

                grid[i][j] = {
                    current: this.dateEqualsNow(value),
                    disabled,
                    faded,
                    onClick: this.onSelectDate,
                    selected: this.dateEquals(value, this.state.value),
                    value,
                };
            }
        }

        return grid;
    }

    /**
     * Check if a date a equals a date b
     *
     * @param a
     * @param b
     */
    private dateEquals(a: Date, b: Date): boolean {
        if (a && b) {
            return a.getFullYear() === b.getFullYear() &&
                a.getMonth() === b.getMonth() &&
                a.getDate() === b.getDate();
        }
        return false;
    }

    private yearEquals(a: Date, b: Date): boolean {
        if (a && b) {
            return a.getFullYear() === b.getFullYear();
        }
        return false;
    }

    private dateLowerThan(a: Date, b: Date): boolean {
        return a.getTime() < b.getTime();
    }

    /**
     * Check if a date equals now
     *
     * @param a
     */
    private dateEqualsNow(a: Date): boolean {
        return this.dateEquals(a, new Date());
    }

    /**
     * Calculate the grid start data from the viewdate. The viewdate is always 1/x/x. The weekday is substracted.
     * Take into account that the grid starts on monday.
     *
     * @param viewDate
     */
    private gridStartDate(viewDate: Date): Date {
        const delta = (viewDate.getDay() === 0) ? 6 : viewDate.getDay() - 1;
        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - delta);
        return date;
    }

    /**
     * Calculate a new day starting from the gridstart date and providing the absolute index.
     *
     * @param gridStartDate
     * @param index
     */
    private gridDateFromIndex(gridStartDate: Date, index: number) {
        return new Date(
            gridStartDate.getFullYear(),
            gridStartDate.getMonth(),
            gridStartDate.getDate() + index,
        );
    }

    private calculateViewDate(date?: Date): Date {
        date = date ? date : new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    // #endregion
}
