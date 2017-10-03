/// <reference types="react" />
import * as React from "react";
export declare type DatePickerProperties = {
    locale?: DatePickerLocale;
    onSelect?: (date: Date) => void;
    position?: {
        top: number;
        left: number;
    };
    value?: Date;
    visible?: boolean;
};
export declare type DatePickerState = {
    viewDate: Date;
    visible?: boolean;
} & DatePickerProperties;
export declare type DatePickerLocale = {
    months: DatePickerMonth[];
    weekdays: DatePickerWeekDay[];
};
export declare type DatePickerMonth = string;
export declare type DatePickerWeekDay = string;
/**
 * Molecules: DatePicker
 */
export declare class DatePicker extends React.Component<DatePickerProperties, DatePickerState> {
    private static weeks;
    private static days;
    constructor(props: DatePickerProperties);
    render(): any;
    componentWillReceiveProps(nextProps: DatePickerProperties): void;
    private previousViewMonth();
    private nextViewMonth();
    private setCurrentMonth();
    private onSelect(date);
    private setViewMonth(delta);
    private className();
    /**
     * The title of the datepicker
     */
    private title();
    /**
     * Compile the grid as @see DatePickerElementProperties.
     */
    private compileGrid();
    /**
     * Check if a date a equals a date b
     *
     * @param a
     * @param b
     */
    private dateEquals(a, b);
    /**
     * Check if a date equals now
     *
     * @param a
     */
    private dateEqualsNow(a);
    /**
     * Calculate the grid start data from the viewdate. The viewdate is always 1/x/x. The weekday is substracted.
     * Take into account that the grid starts on monday.
     *
     * @param viewDate
     */
    private gridStartDate(viewDate);
    /**
     * Calculate a new day starting from the gridstart date and providing the absolute index.
     *
     * @param gridStartDate
     * @param index
     */
    private gridDateFromIndex(gridStartDate, index);
    private calculateViewDate(date?);
    private defaultLocale();
}
