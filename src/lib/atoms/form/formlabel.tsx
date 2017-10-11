import * as classNames from "classnames";
import * as React from "react";

import { inputElementId } from "./id";
import { InputProperties } from "./inputProperties";

export type FormLabelProperties = {
    for?: string,
    noClass?: boolean,
} & Partial<InputProperties<any>>;

/**
 * Atoms: Label component
 */
export class FormLabel extends React.Component<FormLabelProperties, {}> {

    public render(): any {
        if (this.props.label) {
            return (
                <label className={this.className()} htmlFor={this.for()}>
                    {this.props.label}
                </label>
            );
        }
        return null;
    }

    private className(): string {
        return classNames(
            this.props.noClass ? "" : "a-input__label",
            this.props.inline && !this.props.noClass ? "a-input__label--inline" : "",
        );
    }

    private for(): string {
        return this.props.for || inputElementId(this.props as any);
    }
}
