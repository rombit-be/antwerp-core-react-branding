import * as React from "react";

import { Input } from "./input";
import { InputProperties, InputTypes } from "./inputProperties";

type Properties = InputProperties<any>;

export const ColorInput = (props: Properties) => (<Input type={InputTypes.Color} {...props} />);
export const DateTimeInput = (props: Properties) => (<Input type={InputTypes.Datetime} {...props} />);
export const DatetimeLocal = (props: Properties) => (<Input type={InputTypes.DatetimeLocal} {...props} />);
export const EmailInput = (props: Properties) => (<Input type={InputTypes.Email} {...props} />);
export const NumberInput = (props: Properties) => (<Input type={InputTypes.Number} {...props} />);
export const PasswordInput = (props: Properties) => (<Input type={InputTypes.Password} {...props} />);
export const TelInput = (props: Properties) => (<Input type={InputTypes.Tel} {...props} />);
export const TextArea = (props: Properties) => (<Input type={InputTypes.TextArea} {...props} />);
export const TextInput = (props: Properties) => (<Input type={InputTypes.Text} {...props} />);
export const TimeInput = (props: Properties) => (<Input type={InputTypes.Time} {...props} />);
export const UrlInput = (props: Properties) => (<Input type={InputTypes.Url} {...props} />);
export const WeekInput = (props: Properties) => (<Input type={InputTypes.Week} {...props} />);
