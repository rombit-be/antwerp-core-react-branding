import * as React from "react";

import { Checkboxes } from "../..";
import { DatePickerInput, ReduxDatePickerFormAdapterProperties } from "../../molecules/datepicker/datepickerInput";
import { Confirm } from "./confirm";
import { Input } from "./input";
import { InputTypes } from "./inputProperties";
import { ReduxCheckboxesAdapter, ReduxCheckboxesAdapterProperties } from "./reduxCheckboxesAdapter";
import ReduxFormAdapter from "./reduxFormAdapter";
import { ReduxFormAdapterProperties } from "./reduxFormAdapter";
import { ReduxSelectFormAdapterProperties } from "./reduxSelectFormAdapter";
import ReduxSelectFormAdapter from "./reduxSelectFormAdapter";
import { Select } from "./select";

type Properties = ReduxFormAdapterProperties;

export const ColorInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Color} {...props as any} /></ReduxFormAdapter>);
export const DateInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Date} {...props as any} /></ReduxFormAdapter>);
export const DateTimeInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Datetime} {...props as any} /></ReduxFormAdapter>);
export const DatetimeLocalField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.DatetimeLocal} {...props as any} /></ReduxFormAdapter>);
export const EmailInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Email} {...props as any} /></ReduxFormAdapter>);
export const NumberInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Number} {...props as any} /></ReduxFormAdapter>);
export const PasswordInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Password} {...props as any} /></ReduxFormAdapter>);
export const TelInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Tel} {...props as any} /></ReduxFormAdapter>);
export const TextAreaField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.TextArea} {...props as any} /></ReduxFormAdapter>);
export const TextInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Text} {...props as any} /></ReduxFormAdapter>);
export const TimeInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Time} {...props as any} /></ReduxFormAdapter>);
export const UrlInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Url} {...props as any} /></ReduxFormAdapter>);
export const WeekInputField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Input type={InputTypes.Week} {...props as any} /></ReduxFormAdapter>);
export const SelectField = (props: ReduxSelectFormAdapterProperties) =>
    (<ReduxSelectFormAdapter {...props}><Select {...props as any} /></ReduxSelectFormAdapter>);
export const CheckboxField = (props: ReduxCheckboxesAdapterProperties) =>
    (<ReduxCheckboxesAdapter {...props}><Checkboxes {...props as any} /></ReduxCheckboxesAdapter>);
export const ConfirmField = (props: Properties) =>
    (<ReduxFormAdapter {...props}><Confirm type={InputTypes.Color} {...props as any} /></ReduxFormAdapter>);
export const DatePickerField = (props: ReduxDatePickerFormAdapterProperties) =>
    (<ReduxFormAdapter {...props}><DatePickerInput type={InputTypes.Color} {...props as any} /></ReduxFormAdapter>);
