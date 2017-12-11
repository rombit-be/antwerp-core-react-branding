import { DatePickerMonth, DatePickerWeekDay } from "./datepicker";

export type DatePickerGridType = "d" | "m" | "y";

export type DatePickerLocale = {
    months: DatePickerMonth[],
    weekdays: DatePickerWeekDay[],
};

export function updateGridDateFromValue(date: Date, value: number, type: DatePickerGridType): Date {
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    switch (type) {
        case "m":
            return new Date(y, value, d);
        case "y":
            return new Date(value, m, d);
        case "d":
        default:
            return new Date(y, m, value);
    }
}

export function updateGridDateFromDelta(date: Date, delta: number, type: DatePickerGridType): Date {
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    switch (type) {
        case "m":
            return new Date(y, m + delta, d);
        case "y":
            return new Date(y + delta, m, d);
        case "d":
        default:
            return new Date(y, m, d + delta);
    }
}

export function defaultDatePickerLocale(): DatePickerLocale {
    return {
        months: [
            "Jan", "Feb", "Maa", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
        ], weekdays: [
            "Ma", "Di", "Woe", "Do", "Vr", "Za", "Zo",
        ],
    };
}
