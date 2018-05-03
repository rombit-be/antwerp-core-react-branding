import { DatePickerMonth, DatePickerWeekDay } from "./datepicker";
export declare type DatePickerGridType = "d" | "m" | "y";
export declare type DatePickerLocale = {
    months: DatePickerMonth[];
    weekdays: DatePickerWeekDay[];
};
export declare function updateGridDateFromValue(date: Date, value: number, type: DatePickerGridType): Date;
export declare function updateGridDateFromDelta(date: Date, delta: number, type: DatePickerGridType): Date;
export declare function defaultDatePickerLocale(): DatePickerLocale;
