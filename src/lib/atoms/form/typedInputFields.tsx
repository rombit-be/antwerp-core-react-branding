import * as React from "react";

import { Checkboxes } from "../..";
import { Input } from "./input";
import { InputTypes } from "./inputProperties";
import { ReduxCheckboxesAdapter, ReduxCheckboxesAdapterProperties } from "./reduxCheckboxesAdapter";
import { ReduxFormAdapterProperties } from "./reduxFormAdapter";
import ReduxFormAdapter from "./reduxFormAdapter";
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
export const SelectField = (props: ReduxFormAdapterProperties) =>
    (<ReduxSelectFormAdapter {...props}><Select {...props as any} /></ReduxSelectFormAdapter>);
export const CheckboxField = (props: ReduxCheckboxesAdapterProperties) =>
    (<ReduxCheckboxesAdapter {...props}><Checkboxes {...props as any} /></ReduxCheckboxesAdapter>);
