import * as classNames from "classnames";
import * as React from "react";

import { inputElementId } from "./id";
import { InputProperties } from "./inputProperties";

type Properties = { for?: string } & Partial<InputProperties<any>>;

/**
 * Atoms: Label component
 */
export class FormLabel extends React.Component<Properties, {}> {

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
            "a-input__label" + (this.props.inline ? "--inline" : ""),
        );
    }

    private for(): string {
        return this.props.for || inputElementId(this.props as any);
    }
}
