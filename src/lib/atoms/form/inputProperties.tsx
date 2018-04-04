import { Locations } from "../../common/locations";

export enum InputTypes {
    Color = "color",
    Date = "date",
    Datetime = "datetime",
    DatetimeLocal = "datetime-local",
    Default = "text",
    Email = "email",
    File = "file",
    Month = "month",
    Number = "number",
    Password = "password",
    Search = "search",
    Tel = "tel",
    Text = "text",
    TextArea = "textarea",
    Time = "time",
    Url = "url",
    Week = "week",
}

/**
 * Meta props for Redux-Form compatibility
 */
export type FieldMetaProperties = {
    active?: boolean;
    dirty?: boolean;
    error?: boolean | string | JSX.Element;
    invalid?: boolean;
    pristine?: boolean;
    touched?: boolean;
    valid?: boolean;
};

export type BaseInputProperties<T> = {
    addon?: string;
    addonLocation?: Locations;
    autoComplete?: "on" | "off";
    checked?: boolean;
    description?: string | JSX.Element;
    disabled?: boolean;
    errorComponent?: JSX.Element | ((props: any) => JSX.Element),
    icon?: string;
    iconLocation?: Locations;
    inline?: boolean;
    label?: string | JSX.Element;
    max?: number | string;
    maxLength?: number;
    meta?: FieldMetaProperties;
    min?: number | string;
    minLength?: number;
    name: string;
    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onDragStart?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onDrop?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onIconClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
    placeholder?: string;
    required?: boolean;
    value?: T;
};

export type InputProperties<T> = BaseInputProperties<T> & React.InputHTMLAttributes<HTMLInputElement>;

export type TypedInputProperties = { type: InputTypes | string } & InputProperties<any>;
