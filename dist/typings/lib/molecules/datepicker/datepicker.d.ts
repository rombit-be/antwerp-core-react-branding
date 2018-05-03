/// <reference types="react" />
import "./datepicker.scss";
import * as React from "react";
import { DatePickerGridType, DatePickerLocale } from "./datePickerUtils";
export declare type DatePickerProperties = {
    locale?: DatePickerLocale;
    minDate?: Date;
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
    gridType: DatePickerGridType;
} & DatePickerProperties;
export declare type DatePickerMonth = string;
export declare type DatePickerWeekDay = string;
/**
 * Molecules: DatePicker
 */
export declare class DatePicker extends React.Component<DatePickerProperties, DatePickerState> {
    private static gridDateCols;
    private static gridDateRows;
    private static gridYearCols;
    private static gridYearRows;
    constructor(props: DatePickerProperties);
    render(): any;
    componentWillReceiveProps(nextProps: DatePickerProperties): void;
    private className();
    private renderTitle();
    private renderTableHeader();
    private renderTableGrid();
    private onPrevious;
    private onNext;
    private onNavigate(direction);
    private onToggleGridType;
    private onSelectDate;
    private onSelectYear;
    private setViewDateRelative(delta, type);
    private compileGrid();
    private compileYearGrid();
    private compileDateGrid();
    /**
     * Check if a date a equals a date b
     *
     * @param a
     * @param b
     */
    private dateEquals(a, b);
    private yearEquals(a, b);
    private dateLowerThan(a, b);
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
}
