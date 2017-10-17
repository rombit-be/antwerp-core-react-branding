import * as classNames from "classnames";
import * as React from "react";

import { Button } from "../../atoms/button";
import { IconButton } from "../../atoms/iconbutton";
import { Location } from "../../common/locations";
import { DatePickerElement, DatePickerElementProperties } from "./datepickerElement";

export type DatePickerProperties = {
    locale?: DatePickerLocale,
    onSelect?: (date: Date) => void;
    position?: { top: number, left: number };
    value?: Date,
    visible?: boolean,
};
export type DatePickerState = { viewDate: Date, visible?: boolean } & DatePickerProperties;

export type DatePickerLocale = {
    months: DatePickerMonth[],
    weekdays: DatePickerWeekDay[],
};

export type DatePickerMonth = string;
export type DatePickerWeekDay = string;

/**
 * Molecules: DatePicker
 */
export class DatePicker extends React.Component<DatePickerProperties, DatePickerState> {

    private static days: number = 7;
    private static weeks: number = 5;

    public constructor(props: DatePickerProperties) {
        super(props);
        this.state = {
            locale: props.locale || this.defaultLocale(),
            value: props.value,
            viewDate: this.calculateViewDate(props.value),
            visible: props.visible === undefined ? false : props.visible,
        };
    }

    public render(): any {
        const style: any = Object.assign({ position: "absolute", zIndex: 9999 }, this.props.position || {});

        return (
            <div
                role="datepicker"
                style={style} className={this.className()}
            >
                <div className="m-datepicker__nav">
                    <IconButton
                        icon="angle-left"
                        location={Location.Left}
                        onClick={() => this.previousViewMonth()}
                    />
                    <Button
                        className="m-datepicker__title a-button"
                        onClick={() => this.setCurrentMonth()}
                        text={this.title()}
                    />
                    <IconButton
                        icon="angle-right"
                        location={Location.Right}
                        onClick={() => this.nextViewMonth()}
                    />
                </div>
                <table>
                    <thead>
                        <tr className="m-datepicker__days">
                            {this.state.locale.weekdays.map((x, i) => (<th key={`weekday-${i}`}>{x}</th>))}
                        </tr>
                    </thead>
                    <tbody className="m-datepicker__calendar">
                        {
                            this.compileGrid().map((x, i) => (
                                <tr key={i}>
                                    {x.map((y, j) => (
                                        <DatePickerElement
                                            key={j}
                                            onClick={(date: Date) => this.onSelect(date)}
                                            {...y}
                                        />
                                    ))}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    public componentWillReceiveProps(nextProps: DatePickerProperties): void {
        this.setState({ visible: nextProps.visible });
    }

    // Navigation methods

    private previousViewMonth(): void {
        this.setViewMonth(-1);
    }

    private nextViewMonth(): void {
        this.setViewMonth(1);
    }

    private setCurrentMonth(): void {
        this.setState({ viewDate: this.calculateViewDate(this.props.value) });
    }

    private onSelect(date: Date): void {
        if (this.props.onSelect) {
            this.props.onSelect(date);
        }
        this.setState({ value: date, visible: false });
    }

    private setViewMonth(delta: number) {
        this.setState({
            viewDate: new Date(
                this.state.viewDate.getFullYear(),
                this.state.viewDate.getMonth() + delta,
                1,
            ),
        });
    }

    // Rendering utils

    private className(): string {
        return classNames(
            "m-datepicker",
            { "is-open": this.state.visible },
            { "m-datepicker--fixed": this.state.visible },
        );
    }

    /**
     * The title of the datepicker
     */
    private title(): string {
        return this.state.locale.months[this.state.viewDate.getMonth()] +
            " " + this.state.viewDate.getFullYear();
    }

    /**
     * Compile the grid as @see DatePickerElementProperties.
     */
    private compileGrid(): DatePickerElementProperties[][] {
        const viewDate = this.state.viewDate;
        const gridStartDate = this.gridStartDate(viewDate);

        // Initialize a two dimensional array
        const grid: DatePickerElementProperties[][] = [[]];

        // Loop through the number of weeks and initialize the row
        for (let i = 0; i < DatePicker.weeks; i++) {
            grid[i] = [];

            // Loop through the days
            for (let j = 0; j < DatePicker.days; j++) {

                // Calculate the index and the current index data
                const index = (i * DatePicker.days) + j;
                const date = this.gridDateFromIndex(gridStartDate, index);

                grid[i][j] = {
                    current: this.dateEqualsNow(date),
                    currentMonth: viewDate.getMonth() === date.getMonth(),
                    date,
                    selected: this.dateEquals(date, this.state.value),
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

    private calculateViewDate(date: Date = new Date()): Date {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    private defaultLocale(): DatePickerLocale {
        return {
            months: [
                "Jan", "Feb", "Maa", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
            ], weekdays: [
                "Ma", "Di", "Woe", "Do", "Vr", "Za", "Zo",
            ],
        };
    }
}
